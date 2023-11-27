from django.db import models
from uuid import uuid4
from django.contrib.auth import get_user_model

# Create your models here.
class Cliente(models.Model):
    tipo_conta = models.CharField(max_length=20)
    
    def __str__(self):
        return self.id
    


class PessoaFisica(models.Model):
    id_cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    id_pessoa_fisica = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=255, min_length=2)
    cpf = models.CharField(max_length=11, min_length=11) # alguns cpfs começam com zero, entao devem ser aramazenados como string
    data_nascimento = models.DateField()
    tipo_conta = models.CharField(max_length=20)
    
    def __str__(self):
        return self.nome


class PessoaJuridica(models.Model):
    id_cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    id_pessoa_juridica = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome_fantaria = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=14, min_length=14)
    data_abertura = models.DateField()
    tipo_conta = models.CharField(max_length=20)
    
    def __str__(self):
        return self.id
    
        
class ClienteConta(models.Model):
    id_cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    id_conta = models.IntegerField(primary_key=True, default=uuid4)
    num_conta = models.IntegerField(max_length=8, min_length=8)
    agencia = '001'
    senha = models.CharField(max_length=35, min_length=8)
    saldo = models.DecimalField()
    
    def __str__(self):
        return self.id


class EnderecoCliente(models.Model):
    cep = models.CharField(max_length=8)
    uf = models.CharField(max_length=2)
    cidade = models.CharField(max_length=35)
    endereco = models.CharField(max_length=150)
    num_endereco = models.CharField(max_length=10)
    
    
class Movimentacao(models.Model):
    id_conta = models.ForeignKey(ClienteConta)
    
    
class investimento(models.Model):
    ...
    

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
    