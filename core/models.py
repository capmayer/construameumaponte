from django.db import models

class Contato(models.Model):
    nome = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    assunto = models.CharField(max_length=250)
    menssagem = models.TextField(max_length=5000)
    data = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome + " Assunto: " + self.assunto


# clicar no podcast e mudar o player  -- feito
# pop nos lambes -- 
# enviar email
