import json    
import pprint
import urllib
import simplejson

#urllib.urlopen('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAi6T13R5pLSNc_uzwd-0E5VljwzSzN0xw').read
json_data = open('result.json')
object = json.load(json_data)

#pprint.pprint(data)
trips = object['trips']
for tripOption in trips['tripOption']:
    slice = tripOption['slice']
    segment = slice[0]
    print(tripOption['saleTotal'])
    print(segment['duration'])
    leg = segment['leg']
    #pprint.pprint(leg)
    #print(leg['destination'])
    