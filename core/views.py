from django.shortcuts import render, redirect
from django.core.mail import send_mail

from .forms import ContatoForm

def home(request):
    if (request.method == "POST"):
        form = ContatoForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            send_mail(
                post.nome +" "+ post.assunto,
                post.menssagem,
                post.email,
                ['hmayer@inf.ufsm.br'], fail_silently=False
            )
            post.save()
            return redirect('home')
    else:
        contato = ContatoForm()
    return render(request, 'core/index.html', {'contatoForm':contato})
