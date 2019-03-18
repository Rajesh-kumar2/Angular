# Angular
This is My Angular help material
#cli configurations
--style css/scss/sass
--prefix app(this could be any name of your choice to prefix template selector)
#to create new project
--dry-run alias -d
--skip-install alias -si
--skip-tests alias -st
--inline-style alias -is
--inline-template alias -it
#to generate components/module/service/pipe/filter
ng generate component abc or ng g c abc or ng g c folder/abc
ng g c abc --flat (this create files without creating a folder for it)
ng g c abc -d -it -is --spec=false
ng generate service abc or ng g s abc
ng generate service abc --module=app.module of ng g s abc -m=app.module
ng generate module abc of ng g m abc
ng g m -m=app.module(to include the newly createde module in the main module)
ng g m abc --spec=true (to generate spec file for module)
ng g d mydirective --skip-import
ng g d mydirective -m=app.module
ng g p mypipe
ng g g myguard
ng g cl myclass
ng g i myinterface
ng g e enumname
