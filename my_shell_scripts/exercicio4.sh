# EXERCICIO 4

EXISTE="/home/alvaro/shell_script/ex1.sh"

if [ -e "$EXISTE" ]
then 
    echo "o caminho $EXISTE está habilitado"
fi

if [ -w "$EXISTE" ]
then 
    echo "Vc tem permissão para editar $EXISTE "
else
    echo "Vc não foi autorizado a editar $EXISTE "
fi
