from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("teste3.html")

@app.route("/formulario")
def formulario():
    return render_template("formulario.html")

@app.route("/envia_formulario", methods=["GET", "POST"])
def envia_formulario():
    if request.method =="POST":
        return render_template("formulario_resultado.html", name=request.form.get("nome_pessoa"))

if __name__ == '__main__':
    app.run(debug=True)