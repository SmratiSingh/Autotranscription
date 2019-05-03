import speech_recognition as sr
import os
from gensim import summarization as summary
import nltk.tokenize
from nltk.stem.snowball import SnowballStemmer
import json

import sys
from pathlib import Path

isFilePresent = True
POS_REWARD = 1.0
NEG_REWARD = 1.0
THRESHOLD = 0.3
DIR = 'Outputs\\Transcriptions'


# fileCount = len([name for name in os.listdir(DIR) if os.path.isfile(os.path.join(DIR, name))])

# To be Added later ------------------------------
# try:
#     # Path("Data\\Params.json").is_file()
#     file = open("Data\\Params.json", 'r')
#     params = json.load(file)
#     file.close()
# except FileNotFoundError as fnfe:
#     print(fnfe, "The requested file could not be found")
#     print("Using the predictor alone")
#     isFilePresent = False
# ------------------------------------------------


# r = sr.Recognizer()
#
#
# with sr.Microphone() as source:
#      print("Please say something")
#      audio = r.listen(source, phrase_time_limit=540)
#      print("We hope the conversation is over, thanks")
#
# array = r.recognize_google(audio)
#
# try:
#     print("you said: \n"+r.recognize_google(audio))
#     # print("Sphinx thinks you said " + r.recognize_sphinx(audio))
#     # print("you said: \n"+r.recognize_bing(audio));
# except sr.UnknownValueError:
#     print("Sphinx could not understand audio")


def getKeywords(text):
  nltk.download('wordnet', quiet=True)
  tokenized = nltk.tokenize.word_tokenize(text)
  stemmer = SnowballStemmer("english", ignore_stopwords=False)
  rawkws = summary.keywords(text)
  keyws = rawkws.split()

  return keyws


def updateConfidence(domain, receivedKeyword, isSelected):
  currentConf = 0.9  # Get API to fetch the confidence value of current keyword in the selected domain

  if isSelected:
    updatedConf = currentConf + (POS_REWARD * 0.01)
  else:
    updatedConf = currentConf - (NEG_REWARD * 0.01)

  for keyword in receivedKeywords:
    if keyword in params:
      params[keyword] += POS_REWARD * 0.01
      # print("Keyword found from database, '", keyword, "' with a confidence value of: ", params[keyword])
      # print("\n")
    else:
      params[keyword] = 0.5
      # print("New keyword encountered!\nAdding ", keyword,
      #       " to the database...\nDefault confidence value is set to: 0.5")
      # print("\n")

  return updatedConf  # Post API to save the updated confidence


def getSentiments(text):
  with open("positive.txt", "r") as file:
    pos = file.read().split("\n")
  with open("negative.txt", "r") as file:
    neg = file.read().split("\n")

  sentences = text.split(".")
  total_lines = len(sentences)
  pos_count = 0
  neg_count = 0
  for sentence in sentences:
    #     print(sentence,"/n")
    #     print(sentence.split(" "))
    if len(list(set(pos).intersection(sentence.split(" ")))) >= 1:
      pos_count += 1
    if len(list(set(neg).intersection(sentence.split(" ")))) >= 1:
      neg_count += 1
  sentiment_score = abs(pos_count - neg_count)

  if sentiment_score / total_lines >= 0.2:
    if pos_count > neg_count:
      return "positive"
    else:
      return "negative"
  else:
    return "neutral"


def writeData(text, sentiment):
  final_keywords = ""

  for data in text:
    final_keywords += data + ","
  final_keywords = final_keywords[:-1]
  print(final_keywords + ":" + sentiment)


# while (True):
#     choice = (input("Do you see any wrong keywords in the above list? [Y/N]")).lower()
#
#     if choice == "n":
#         break
#     else:
#         incorrect = input("Please enter one incorrect keyword that you see")
#         params[incorrect] -= NEG_REWARD*0.01
#         print(params)

if __name__ == "__main__":
  # params = {"star": 0.74, "stellar": 0.65, "galaxy": 0.73, "shoe": 0.27, "hole": 0.5, "gaia": 0.54, "cluster": 0.54, "gravitational": 0.55, "say": 0.51, "stream": 0.54, "disk": 0.54, "nearby": 0.54, "sky": 0.55, "clusters": 0.52, "says": 0.52, "streams": 0.52, "stars": 0.52, "years": 0.52, "planet": 0.52, "like": 0.52, "finding": 0.52, "astronomical": 0.52, "astronomers": 0.52, "immediate": 0.52, "immediately": 0.52, "way": 0.52, "astrophysics": 0.52, "gravity": 0.52, "limitations": 0.52, "limits": 0.52, "galaxies": 0.52, "authors": 0.52, "author": 0.52, "forces": 0.52, "fewer": 0.52, "dispersing": 0.52, "disperse": 0.52, "old": 0.52, "parlance": 0.52, "heavy": 0.5}
  params = {}
  # receivedKeywords = getKeywords(text)
  text = sys.argv[1]
  # text = """In any case, there’s something pure and powerful about this movie. I can’t recall a science fiction film hard-sold to a director’s fans as multiplex-“awesome” in which so many major characters wept openly in close-up, voices breaking, tears streaming down their cheeks. Matthew McConaughey’s widowed astronaut Cooper and his colleague Amelia Brand (Anne Hathaway) pour on the waterworks in multiple scenes, with justification: like everyone on the crew of the Endurance, the starship sent to a black hole near Jupiter that will slingshot the heroes towards colonize-able worlds, they’re separated from everything that defines them: their loved ones, their personal histories, their culture, the planet itself. Other characters—including Amelia's father, an astrophysicist played by Michael Caine, and a space explorer (played by an un-billed guest actor) who’s holed up on a forbidding arctic world—express a vulnerability to loneliness and doubt that’s quite raw for this director. The film’s central family (headed by Cooper, grounded after the dismantling of NASA) lives on a corn farm, for goodness’ sake, like the gentle Iowans in "Field of Dreams" (a film whose daddy-issues-laden story syncs up nicely with the narrative of "Interstellar"). Granted, they're growing the crop to feed the human race, which is whiling away its twilight hours on a planet so ecologically devastated that at first you mistake it for the American Dust Bowl circa 1930 or so; but there's still something amusingly cheeky about the notion of corn as sustenance, especially in a survival story in which the future of humanity is at stake. (Ellen Burstyn plays one of many witnesses in a documentary first glimpsed in the movie's opening scene—and which, in classic Nolan style, is a setup for at least two twists.)"""

  sentiment = getSentiments(text)
  receivedKeywords = getKeywords(text)
  # updateConfidence(receivedKeywords, params)
  writeData(receivedKeywords, sentiment)
