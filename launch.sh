##########################################################################
# 1- Installation des dépendances du projet                              #
# 2- Création de la base de données                                      #
# 3- Chargement du script SQL avec jeu de données d'example              #
# 4- Création du fichier .env contenant la configuration mysql           #
#                                                                        #
#                                                                        #
#                                                                        #
#                                                                        #
#                                                                        #
#                                                                        #
#                                                                        #
##########################################################################

# Ask the user for their name
echo Welcome in the installation program of your FAQ
echo We will need your mysql credentials to set-up the database and your environnement file to access database
read -p 'Please enter your mysql host : ' mysql_host
read -p 'Please enter your mysql user : ' mysql_user
read  -s -p 'Please enter your mysql password : ' mysql_password
echo Thank you for these informations


# Installation of dependances in front, back office and API
cd back/
echo Installation of dependances for BACK
 npm install
cd ..
cd front/
echo Installation of dependances for FRONT
 npm install
cd ..
cd api/
echo Installation of dependances for API
 npm install


echo Creation of BDD and sample data


# Connection to mysql and loading of sample data
mysql -u$mysql_user  -p$mysql_password -h $mysql_host < ./sql/db_init.sql
tmpfile=tmp.env
cat <<EOF  > $tmpfile

# Adding environnement variables to react project
MYSQL_USER="$mysql_user"
MYSQL_HOST="$mysql_host"
MYSQL_PASSWORD="$mysql_password"
MYSQL_DATABASE="faqosdb"
EOF
mv $tmpfile .env

# Adding .env to .gitignore
cat <<EOF >> ./.gitignore
.env
EOF
