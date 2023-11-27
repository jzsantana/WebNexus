# from rest_framework import viewsets
# import serializers
# import models
# from rest_framework.permissions import IsAuthenticated
# from rest_framework import filters
# from django_filters.rest_framework import DjangoFilterBackend


# class AtendimentoViewSet(viewsets.ModelViewSet):
#     serializer_class = serializers.AtendimentoSerializer
#     queryset = models.Atendimento.objects.all()
#     filter_backends = [filters.SearchFilter]
#     search_fields = ['cliente__nome', 'cliente__telefone', 'cliente__email', 'cliente__observacao', 'solicitacao']
