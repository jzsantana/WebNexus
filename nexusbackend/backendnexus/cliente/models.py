from django.db import models
from uuid import uuid4

# Create your models here.
class PessoaFisica(models.Model):
    nome = models.CharField(max_length=255, min_length=2)
    cpf = models.CharField(max_length=11, min_length=11) # alguns cpfs começam com zero, entao devem ser aramazenados como string
    data_nascimento = models.DateField()
    tipo_conta = models.CharField(max_length=20)


class PessoaJuridica(models.Model):
    nome_fantaria = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=14, min_length=14)
    data_abertura = models.DateField()
    
        
class ClienteConta(models.Model):
    num_conta = models.IntegerField(max_length=8, min_length=8)
    agencia = models.IntegerField(max_length=5, min_length=5)
    senha = models.CharField(max_length=35, min_length=8)


class EnderecoCliente(models.Model):
    ...
    

class Agencia(models.Model):
    """
    Pensando em um banco digital que nao opera fisicamente, não acho que há 
    a necessidade da criação de muitas agencias
    """
    
class EnderecoAgencia(models.Model):
    num_agencia = models.IntegerField()
    

"""
classes que devem ser construídas aqui: 

pessoa fisica - cadastro de pessoa fisica (cpf)
pessoa juridica - cadastro de pessoa juridica (cnpj)
cliente conta - classe que cadastra o numero da conta, agencia e senha do usuario
endereco do cliente -  

"""


"""
python enywhere: lugar para hospedar a api
"""
    