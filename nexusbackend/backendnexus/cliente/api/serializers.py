from rest_framework import serializers
import models

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'


class PessoaFisicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PessoaFisica
        fields = '__all__'


class PessoaJuridicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PessoaJuridica
        fields = '__all__'


class ClienteContaSerializer(serializers.ModelSerializer):
    # id_atendente = AtendenteSerializer(read_only=True)
    # id_depto = DepartamentoSerializer(read_only=True)

    class Meta:
        model = models.Situacao_Atendimento
        fields = '__all__'


# class AtendimentoSerializer(serializers.ModelSerializer):
#     cliente = serializers.StringRelatedField(read_only=True)
#     departamento = serializers.StringRelatedField(read_only=True)
#     atendente = serializers.StringRelatedField(read_only=True)
#     atendimentos = Situacao_AtendimentoSerializer(many=True, read_only=True)

#     class Meta:
#         model = models.Atendimento
#         # fields = '__all__'
#         fields = ['id', 'solicitacao', 'cliente', 'departamento', 'atendente', 'criado_em', 'encerrado', 'atendimentos']

