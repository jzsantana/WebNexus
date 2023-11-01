from django.db import models
from uuid import uuid4

# Create your models here.
class PessoaFisica(models.Model):
    id_cliente = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=255, min_length=2)
    cpf = models.CharField(max_length=11, min_length=11) # alguns cpfs começam com zero, entao devem ser aramazenados como string
    

class PessoaJuridica(models.Model):
    id_cliente = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome_fantaria = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=14, min_length=14)
    
    
    
class ClienteConta(models.Model):
    num_conta = models.IntegerField(max_length=8, min_length=8)
    agencia = models.IntegerField(max_length=5, min_length=5)
    senha = models.CharField(max_length=35, min_length=8)
    
    
class EnderecoCliente(models.Model):
    ...
    
    
class Agencia(models.Model):
    ...
    
    

"""
classes que devem ser construídas aqui: 

pessoa fisica - cadastro de pessoa fisica (cpf)
pessoa juridica - cadastro de pessoa juridica (cnpj)
cliente conta - classe que cadastra o numero da conta, agencia e senha do usuario
endereco do cliente -  

"""
