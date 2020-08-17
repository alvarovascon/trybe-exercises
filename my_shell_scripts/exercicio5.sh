# EXERCICIO 5

echo "digite um caminho de arquivo ou diretório"

read CAMINHO

if [ -f $CAMINHO ]
then
    echo "trata-se de um arquivo comum"
elif [ -d $CAMINHO ]
then
    echo "trata-se de um diretório"
else
    echo "trata-se de um arquivo especial"
fi