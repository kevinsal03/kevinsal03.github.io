#checks for root
if [ `id -u` != 0 ]; then echo ""Run this as root""; exit 0; fi 

#setup
echo "Removing items..."
sudo ./remove.sh

sudo dpkg-scanpackages -m ./debs/ /dev/null >./Packages

sudo bzip2 -k ./Packages
echo "done"