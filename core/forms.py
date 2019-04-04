from django import forms

from .models import Contato

class ContatoForm(forms.ModelForm):
    class Meta:
        model = Contato
        fields = ('nome', 'email', 'assunto','menssagem')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['nome'].widget.attrs.update({'placeholder':  'Nome', 'size': '49', 'style': 'border-radius: 5px;'})
        self.fields['email'].widget.attrs.update({'placeholder': 'Email', 'size': '49', 'style': 'border-radius: 5px;'})
        self.fields['assunto'].widget.attrs.update({'placeholder': 'Assunto', 'size': '49', 'style': 'border-radius: 5px;'})
        self.fields['menssagem'].widget.attrs.update({'placeholder': 'Mensagem', 'cols': '49', 'style': 'border-radius: 5px;'})
