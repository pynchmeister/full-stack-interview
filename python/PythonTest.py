from flask import Flask, request
import random 

app = Flask(__name__)

@app.route('/')
def get_random():
    start = request.args.get("start")
    end = request.args.get("end")
    # print (start)
    # print (end)

    if start  == None:
        start = 1 

    if end == None:
        end = 1000

    r = random.randrange(int(start),int (end)) 



    return { 'r': r }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5002')
