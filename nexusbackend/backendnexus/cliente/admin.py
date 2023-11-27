from django.contrib import admin

# Register your models here.
from .models import Cliente, PessoaFisica, PessoaJuridica, ClienteConta
admin.site.register(Cliente)
admin.site.register(PessoaFisica)
admin.site.register(PessoaJuridica)
admin.site.register(ClienteConta)

# @admin.register(Cliente)
# class CursoAdmin(admin.ModelAdmin):
#     list_display = ('nome', 'cpf')


