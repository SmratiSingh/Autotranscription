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


def getKeywords(text):

    nltk.download('wordnet')
    tokenized = nltk.tokenize.word_tokenize(text)
    stemmer = SnowballStemmer("english", ignore_stopwords=False)
    rawkws = summary.keywords(text)
    keyws = rawkws.split()

    return keyws


def writeData(text, params):
    final_keywords = ""
    for word in params:
        if params.get(word) > THRESHOLD:
            final_keywords += (word+",")

    final_keywords = final_keywords[:-1]
    print(final_keywords)


if __name__ == "__main__":

    params = {}
    receivedKeywords = getKeywords(sys.argv[1])
    # updateConfidence(receivedKeywords, params)
    writeData(receivedKeywords, params)