# EXERCICIO 6

CAMINHO=$1

if [ -f $CAMINHO ]
then
    echo "trata-se de um arquivo comum"
elif [ -d $CAMINHO ]
then
    echo "trata-se de um diretório"
else
    echo "trata-se de um arquivo especial"
fi