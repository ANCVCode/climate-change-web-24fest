from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        consumption = request.form.get('consumption', '')
        result = hesapla(consumption)
        return render_template('answer.html', result=result)
    return render_template('home.html')

@app.route('/lights', methods=['GET', 'POST'])
def lights():
    if request.method == 'POST':
        light_bulbs = request.form.get('light_bulbs', '')
        result = hesapla(light_bulbs)
        return render_template('answer.html', result=result)
    return render_template('lights.html')

@app.route('/electronics', methods=['GET', 'POST'])
def electronics():
    if request.method == 'POST':
        devices = request.form.get('devices', '')
        result = hesapla(devices)
        return render_template('answer.html', result=result)
    return render_template('electronics.html')

@app.route('/informclimate')
def inform_climate():
    return render_template('informclimate.html')

@app.route('/answer', methods=['POST'])
def answer():
    choice = request.form.get('choice', '')
    if choice == '1':
        result = "Yeşilsiniz! Doğaya zarar vermiyorsunuz!"
    elif choice == '2':
        result = "İyi durumdasınız."
    elif choice == '3':
        result = "Tasarruf yapmalısınız."
    else:
        result = "Geçersiz seçim."
    return render_template('answer.html', result=result)

def hesapla(value):
    try:
        value = int(value)
    except ValueError:
        return "Geçersiz giriş, lütfen geçerli bir sayı girin."
    
    if value < 100:
        return "Yeşilsiniz! Doğaya zarar vermiyorsunuz!"
    elif value < 200:
        return "İyi durumdasınız."
    else:
        return "Tasarruf yapmalısınız."

if __name__ == '__main__':
    app.run(debug=True)
