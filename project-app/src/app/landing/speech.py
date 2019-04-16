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
#------------------------------------------------



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

    nltk.download('wordnet',quiet=True)
    tokenized = nltk.tokenize.word_tokenize(text)
    stemmer = SnowballStemmer("english", ignore_stopwords=False)
    rawkws = summary.keywords(text)
    keyws = rawkws.split()

    return keyws


def updateConfidence(receivedKeywords, params):

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



def writeData(text, params):
    final_keywords = ""
    for word in params:
        if params.get(word) > THRESHOLD:
            final_keywords += (word+",")

    # file = open("Data\\Params.json", 'w')
    # file.write(json.dumps(params))
    # file.close()
    # file = open("Outputs\\Transcriptions\\output" + str(fileCount) + ".txt", "w")
    # file.write(text)
    # file.close()
    # file = open("Outputs\\Transcriptions\\output" + str(fileCount) + "_KWs.txt", "w")
    # for keyword in final_keywords:
    #     file.write(keyword + "\n")
    # file.close()
    final_keywords = final_keywords[:-1]
    print(final_keywords)


# print("\n\n")
# print(receivedKeywords)


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
    receivedKeywords = getKeywords(sys.argv[1])
    updateConfidence(receivedKeywords, params)
    writeData(receivedKeywords, params)