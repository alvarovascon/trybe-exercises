# EXERCICIO 7

DIR=$1
if [ -d $DIR ]
then
    ITENS=`ls $DIR | wc -l`
    echo "o diretório tem $ITENS itens"

else
    echo "o parâmetro $DIR não é um diretório"
fi