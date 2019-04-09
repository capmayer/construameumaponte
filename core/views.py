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
                ['lexufsm@gmail.com'], fail_silently=False
            )
            post.save()
            return redirect('home')
    else:
        contato = ContatoForm()
    return render(request, 'core/index.html', {'contatoForm':contato})

def page_not_found(request):
    return render(request, 'core/html404.html', {})

def server_error(request):
    return render(request, 'core/html500.html', {})

def no_permission(request):
    return render(request, 'core/html403.html', {})

def bad_request(request):
    return render(request, 'core/html400.html', {})
