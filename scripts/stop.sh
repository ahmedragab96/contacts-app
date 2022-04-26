docker stop $(docker ps -a -q --filter ancestor=strv-addressbook-ragab-ahmed --format="{{.ID}}")
