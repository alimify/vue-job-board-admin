/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(){return{a11y:{widget:{title:"Verificator accesibilitate",running:"\xcen curs de verificare...",issue:{counter:"Problema {0} din {1}",help:"WCAG 2.0 referin\u021b\u0103 - se deschide \xeentr-o fereastr\u0103 nou\u0103",none:"Nu au fost detectate probleme de accesibilitate"},previous:"Problema anterioar\u0103",next:"Problema urm\u0103toare",repair:"Problem\u0103 reparare",available:"Reparare disponibil\u0103",ignore:"Ignorare"},image:{alttext:{empty:"Imaginile trebuie s\u0103 aib\u0103 o descriere text alternativ",filenameduplicate:"Textul alternativ nu trebuie s\u0103 fie acela\u0219i cu denumirea de fi\u0219ier a imaginii",set:"Furnizare text alternativ:",validation:{empty:"Textul alternativ nu poate fi gol",filenameduplicate:"Textul alternativ nu poate fi acela\u0219i cu denumirea de fi\u0219ier"}}},table:{caption:{empty:"Tabelele trebuie s\u0103 aib\u0103 legende",summaryduplicate:"Legenda \u0219i rezumatul tabelului nu pot avea aceea\u0219i valoare",set:"Furnizare legend\u0103:",validation:{empty:"Legenda nu poate fi goal\u0103",summaryduplicate:"Legenda tabelului nu poate fi aceea\u0219i cu rezumatul tabelului"}},summary:{empty:"Tabelele complexe trebuie s\u0103 aib\u0103 rezumate",set:"Furnizare rezumat tabel:",validation:{empty:"Rezumatul nu poate fi gol",captionduplicate:"Rezumatul tabelului nu poate fi acela\u0219i cu legenda tabelului"}},rowscells:{none:"Elementele tabelului trebuie s\u0103 con\u021bin\u0103 etichete TR \u0219i TD"},headers:{none:"Tabelele trebuie s\u0103 aib\u0103 cel pu\u021bin o celul\u0103 antet",set:"Alegere antet tabel:",validation:{none:"Selecta\u021bi fie un antet r\xe2nd, fie un antet coloan\u0103"}},headerscope:{none:"Antetele de tabel trebuie aplicate unui r\xe2nd sau unei coloane",set:"Selectare domeniu antet:",scope:{row:"R\xe2nd",col:"Coloan\u0103",rowgroup:"Grup r\xe2nduri",colgroup:"Grup coloane"}}},heading:{nonsequential:"Antetele trebuie aplicate \xeen ordine secven\u021bial\u0103. De exemplu: Antetul 1 trebuie urmat de Antetul 2, nu de Antetul 3.",paragraphmisuse:"Acest paragraf arat\u0103 ca un antet. Dac\u0103 este un antet, selecta\u021bi un nivel de antet.",set:"Selecta\u021bi un nivel de antet:"},link:{adjacent:"Linkurile adiacente cu aceea\u0219i adres\u0103 URL trebuie fuzionate \xeentr-un singur link"},list:{paragraphmisuse:"Textul selectat pare s\u0103 fie o list\u0103. Listele trebuie formatate folosind o etichet\u0103 list\u0103."},contrast:{smalltext:"Textul trebuie s\u0103 aib\u0103 o rat\u0103 de contrast de cel pu\u021bin 4,5:1",largetext:"Textul mare trebuie s\u0103 aib\u0103 o rat\u0103 de contrast de cel pu\u021bin 3:1"},severity:{error:"Eroare",warning:"Avertisment",info:"Informativ"}},aria:{autocorrect:{announce:"Corectare automat\u0103 {0}"},label:{toolbar:"Bar\u0103 de instrumente Editor de text \xeembog\u0103\u021bit",editor:"Editor de text \xeembog\u0103\u021bit Textbox.io - {0}",fullscreen:"Editor de text \xeembog\u0103\u021bit pe ecran complet Textbox.io - {0}",content:"Con\u021binut editabil",more:"Clic pentru extindere sau restr\xe2ngere"},help:{mac:"Ap\u0103sa\u021bi \u2303\u2325H pentru ajutor",ctrl:"Ap\u0103sa\u021bi CTRL SHIFT H pentru ajutor"},color:{picker:"Selector culori",menu:"Meniu selector culori"},font:{color:"Culori text",highlight:"Eviden\u021biere culori",palette:"Palet\u0103 de culori"},context:{menu:{generic:"Meniu contextual"}},stepper:{input:{invalid:"Valoarea dimensiunii nu este valid\u0103"}},table:{headerdescription:"Ap\u0103sa\u021bi tasta Space pentru a activa configurarea. Ap\u0103sa\u021bi tasta Tab pentru a reveni la selectorul pentru tabel.",cell:{border:{size:"Dimensiune bordur\u0103"}}},input:{invalid:"Intrare incorect\u0103"},widget:{navigation:"Utiliza\u021bi tastele s\u0103ge\u021bi pentru a naviga."},image:{crop:{size:"Dimensiunea de decupare este {0} pixeli cu {1} pixeli"}}},color:{white:"Alb",black:"Negru",gray:"Gri",metal:"Metal",smoke:"Fumuriu",red:"Ro\u0219u",darkred:"Ro\u0219u \xeenchis",darkorange:"Portocaliu \xeenchis",orange:"Portocaliu",yellow:"Galben",green:"Verde",darkgreen:"Verde \xeenchis",mediumseagreen:"Verde marin mediu",lightgreen:"Verde deschis",lime:"Galben l\u0103m\xe2i",mediumblue:"Albastru mediu",navy:"Bleumarin",blue:"Albastru",lightblue:"Albastru deschis",violet:"Violet"},directionality:{rtldir:"Direc\u021bie de la dreapta la st\xe2nga",ltrdir:"Direc\u021bie de la st\xe2nga la dreapta"},parlance:{menu:"Meniu limb\u0103",set:"Setare limb\u0103",ar:"Arab\u0103",ca:"Catalan\u0103",zh_cn:"Chinez\u0103 (Simplificat\u0103)",zh_tw:"Chinez\u0103 (Tradi\u021bional\u0103)",hr:"Croat\u0103",cs:"Ceh\u0103",da:"Danez\u0103",nl:"Olandez\u0103",en:"Englez\u0103",en_au:"Englez\u0103 (Australia)",en_ca:"Englez\u0103 (Canada)",en_gb:"Englez\u0103 (Marea Britanie)",en_us:"Englez\u0103 (Statele Unite ale Americii)",fa:"Farsi",fi:"Finlandez\u0103",fr:"Francez\u0103",fr_ca:"Francez\u0103 (Canada)",de:"German\u0103",el:"Greac\u0103",he:"Ebraic\u0103",hu:"Maghiar\u0103",it:"Italian\u0103",ja:"Japonez\u0103",kk:"Kazah\u0103",ko:"Coreean\u0103",no:"Norvegian\u0103",pl:"Polonez\u0103",pt_br:"Portughez\u0103 (Brazilia)",pt_pt:"Portughez\u0103 (Portugalia)",ro:"Rom\xe2n\u0103",ru:"Rus\u0103",sk:"Slovac\u0103",sl:"Sloven\u0103",es:"Spaniol\u0103",es_419:"Spaniol\u0103 (America Latin\u0103)",es_es:"Spaniol\u0103 (Spania)",sv:"Suedez\u0103",tt:"T\u0103tar\u0103",th:"Thai",tr:"Turc\u0103",uk:"Ucrainean\u0103"},taptoedit:"Atinge\u021bi pentru a edita",plaincode:{dialog:{title:"Vizualizare Cod",editor:"Editor surs\u0103 HTML"}},help:{dialog:{accessibility:"Navigare de la tastatur\u0103",a11ycheck:"Verificare accesibilitate",about:"Despre Textbox.io",markdown:"Formatare Markdown",shortcuts:"Comenzi rapide de la tastatur\u0103"}},spelling:{context:{more:"Mai mult",morelabel:"Submeniu Mai multe op\u021biuni de ortografiere"},none:"Nu se utilizeaz\u0103 (acest c\xe2mp)",menu:"Ortografiere limb\u0103"},specialchar:{open:"Caracter special",dialog:"Inserare caracter special",latin:"Latin\u0103",insert:"Inserare",punctuation:"Punctua\u021bie",currency:"Monede","extended-latin-a":"Latin\u0103 extins\u0103 A","extended-latin-b":"Latin\u0103 extins\u0103 B",arrows:"S\u0103ge\u021bi",mathematical:"Matematic\u0103",miscellaneous:"Diverse",selects:"Caractere selectate",grid:"Caractere speciale"},insert:{"menu-button":"Meniu inserare",menu:"Inserare",link:"Link",image:"Imagine",table:"Tabel",horizontalrule:"Rigl\u0103 orizontal\u0103",media:"Media"},media:{embed:"Cod \xeencorporat media",insert:"Inserare",placeholder:"Lipi\u021bi codul \xeencorporat aici."},wordcount:{open:"Num\u0103r\u0103toare de cuvinte",dialog:"Num\u0103r\u0103toare de cuvinte",counts:"Num\u0103r\u0103toare",selection:"Selec\u021bie",document:"Document",characters:"Caractere",charactersnospaces:"Caractere (f\u0103r\u0103 spa\u021bii)",words:"Cuvinte"},list:{unordered:{menu:"Op\u021biuni neordonat implicit",default:"Neordonat implicit",circle:"Neordonat circular",square:"Neordonat p\u0103trat",disc:"Neordonat disc"},ordered:{menu:"Op\u021biuni ordonat implicit",default:"Ordonat implicit",decimal:"Ordonat zecimale","upper-alpha":"Ordonat majuscule","lower-alpha":"Ordonat minuscule","upper-roman":"Ordonat cifre romane majuscule","lower-roman":"Ordonat cifre romane minuscule","lower-greek":"Ordonat alfabet grec minuscule"}},tag:{inline:{class:"span ({0})"},img:"imagine"},block:{normal:"Normal",p:"Paragraf",h1:"Titlu 1",h2:"Titlu 2",h3:"Titlu 3",h4:"Titlu 4",h5:"Titlu 5",h6:"Titlu 6",div:"Div",pre:"Pre",li:"Element de list\u0103",td:"Celul\u0103",th:"Celul\u0103 de antet",styles:"Meniu stiluri",dropdown:"Blocuri",describe:"Stil curent {0}",menu:"Stiluri",label:{inline:"Stiluri interioare",table:"Stiluri tabel",line:"Stiluri linie",media:"Stiluri media",list:"Stiluri list\u0103",link:"Stiluri link"}},font:{"menu-button":"Meniu fonturi",menu:"Font",face:"Tip caractere",size:"Dimensiune font",coloroption:"Culoare",describe:"Font curent {0}",color:"Text",highlight:"Eviden\u021biere",stepper:{input:"Setare dimensiune fonturi",increase:"Cre\u0219tere dimensiune fonturi",decrease:"Reducere dimensiune fonturi"}},cog:{"menu-button":"Meniu set\u0103ri",menu:"Set\u0103ri",spellcheck:"Verificare ortografic\u0103",capitalisation:"Scriere cu majuscule",autocorrect:"Corectare automat\u0103",linkpreviews:"Previzualiz\u0103ri link-uri",help:"Ajutor"},alignment:{toolbar:"Meniu aliniere",menu:"Aliniere",left:"Aliniere la st\xe2nga",center:"Aliniere la centru",right:"Aliniere la dreapta",justify:"Aliniere st\xe2nga-dreapta",describe:"Aliniere curent\u0103 {0}"},category:{language:"Grup limb\u0103",undo:"Anulare \u0219i refacere grup",insert:"Introducere grup",style:"Grup stiluri",emphasis:"Grup formatare",align:"Grup aliniere",listindent:"List\u0103 \u0219i grup de indentare",format:"Grup fonturi",tools:"Grup instrumente",table:"Grup tabele",image:"Grup Editare imagine"},action:{undo:"Anulare",redo:"Refacere",bold:"Aldin",italic:"Cursiv",underline:"Subliniere",strikethrough:"T\u0103iere",subscript:"Indice",superscript:"Exponent",removeformat:"Eliminare formatare",bullist:"List\u0103 neordonat\u0103",numlist:"List\u0103 ordonat\u0103",indent:"Indentare mai mult",outdent:"Indentare mai pu\u021bin",blockquote:"Blockquote",fullscreen:"Ecran complet",search:"Dialog g\u0103sire \u0219i \xeenlocuire",a11ycheck:"Verificare accesibilitate",toggle:{fullscreen:"Ie\u0219ire ecran complet"}},table:{menu:"Inserare tabel","column-header":"Coloan\u0103 antet","row-header":"R\xe2nd antet",float:"Aliniere mobil\u0103",cell:{color:{border:"Culoare bordur\u0103",background:"Culoare fundal"},border:{width:"L\u0103\u021bime bordur\u0103",stepper:{input:"Setare l\u0103\u021bime bordur\u0103",increase:"M\u0103rire l\u0103\u021bime bordur\u0103",decrease:"Mic\u0219orare l\u0103\u021bime bordur\u0103"}}},context:{row:{title:"Submeniu r\xe2nd",menu:"R\xe2nd",insertabove:"Introducere sus",insertbelow:"Introducere jos"},column:{title:"Submeniu coloan\u0103",menu:"Coloan\u0103",insertleft:"Introducere la st\xe2nga",insertright:"Introducere la dreapta"},cell:{merge:"\xcembinare celule",unmerge:"Scindare celul\u0103","split-cols":"Scindare \xeen coloane","split-rows":"Scindare \xeen r\xe2nduri"},table:{title:"Submeniu tabel",menu:"Tabel",properties:"Propriet\u0103\u021bi",delete:"\u0218tergere"},common:{delete:"\u0218tergere",normal:"Setare ca Normal",header:"Setare ca Antet"},palette:{show:"Op\u021biunile de editare tabel disponibile \xeen bara de instrumente",hide:"Op\u021biunile de editare tabel nu mai sunt disponibile"}},picker:{header:"Set antete",label:"Selector tabel",describepicker:"Utiliza\u021bi tastele s\u0103ge\u021bi pentru a seta dimensiunea tabelului.  Ap\u0103sa\u021bi tasta Tab pentru a merge la set\u0103rile antetului de tabel. Ap\u0103sa\u021bi tasta Space sau tasta Enter pentru a introduce tabelul.",rows:"{0} \xeen\u0103l\u021bime",cols:"{0} l\u0103\u021bime"},border:"Bordur\u0103",summary:"Rezumat",dialog:"Propriet\u0103\u021bi tabel",caption:"Legend\u0103 tabel",width:"L\u0103\u021bime",height:"\xcen\u0103l\u021bime"},align:{none:"Nu se aliniaz\u0103",center:"Aliniere la centru",left:"Aliniere la st\xe2nga",right:"Aliniere la dreapta"},button:{ok:"OK",cancel:"Revocare",close:"Revocare dialog"},banner:{close:"\xcenchidere dialog"},border:{on:"Activare",off:"Dezactivare",labels:{on:"Margine activat\u0103",off:"Margine dezactivat\u0103"}},loading:{wait:"V\u0103 rug\u0103m a\u0219tepta\u021bi"},toolbar:{more:"Mai mult",backbutton:"\xcenapoi","switch-code":"Comutare la vizualizare cod","switch-pencil":"Comutare la vizualizare Design"},link:{context:{edit:"Editare link",follow:"Deschidere link",ignore:"Ignorare link defect",remove:"Eliminare link"},dialog:{aria:{update:"Actualizare link",insert:"Inserare link",properties:"Propriet\u0103\u0163i link",quick:"Op\u0163iuni rapide"},autocomplete:{open:"Lista de linkuri care pot fi completate automat este disponibil\u0103. Continua\u021bi s\u0103 tasta\u021bi sau utiliza\u021bi tastele s\u0103geat\u0103 \xeen sus sau \xeen jos pentru a selecta sugestiile.",close:"Lista de linkuri care pot fi completate automat este \xeenchis\u0103",accept:"Sugestie link selectat {0}"},edit:"Editare",remove:"Eliminare",preview:"Previzualizare",update:"Actualizare",insert:"Inserare",tooltip:"Link"},properties:{dialog:{title:"Propriet\u0103\u0163i link"},text:{label:"Text de afi\u0219at",placeholder:"Tasta\u021bi sau lipi\u021bi textul de afi\u0219at"},url:{label:"URL link sau marcaj",placeholder:"Introducere URL link sau marcaj",invalid:"Este posibil ca URL-ul introdus de dumneavoastr\u0103 s\u0103 nu fie corect"},title:{label:"Titlu",placeholder:"Tasta\u021bi sau lipi\u021bi titlul linkului"},button:{remove:"Eliminare"},target:{label:"Destina\u021bie",none:"Nu se utilizeaz\u0103 (acest c\xe2mp)",blank:"Fereastr\u0103 nou\u0103",top:"Pagin\u0103 \xeentreag\u0103",self:"Acela\u0219i cadru",parent:"Cadru p\u0103rinte"}},anchor:{top:"Partea de sus a documentului",bottom:"Partea de jos a documentului"}},fileupload:{title:"Introducere imagini",tablocal:"Fi\u0219iere locale",tabweburl:"Adres\u0103 URL web",dropimages:"Fixare imagini aici",chooseimage:"Alegere imagine pentru \xeenc\u0103rcat",web:{url:"URL imagine web:"},weburlhelp:"Introduce\u021bi adresa URL pentru a observa o previzualizare a imaginii. Poate fi necesar un interval de timp mai lung pentru afi\u0219area imaginilor mari.",invalid1:"Nu am putut g\u0103si o imagine la adresa URL pe care o utiliza\u021bi.",invalid2:"Verifica\u021bi adresa URL pentru erori de tastare.",invalid3:"Asigura\u021bi-v\u0103 c\u0103 imaginea pe care o accesa\u021bi este public\u0103, nu este protejat\u0103 prin parol\u0103 \u0219i nu se afl\u0103 \xeentr-o re\u021bea privat\u0103."},image:{context:{properties:"Propriet\u0103\u021bi imagine",palette:{show:"Op\u021biunile de editare imagine disponibile \xeen bara de instrumente",hide:"Op\u021biunile de editare imagine nu mai sunt disponibile"}},dialog:{title:"Propriet\u0103\u021bi imagine",fields:{align:"Aliniere mobil\u0103",url:"URL",urllocal:"Imaginea nu a fost salvat\u0103 \xeenc\u0103",alt:"Text alternativ",width:"L\u0103\u021bime",height:"\xcen\u0103l\u021bime",constrain:{label:"Restric\u021bionare propor\u021bii",on:"Propor\u021bii blocate",off:"Propor\u021bii deblocate"}}},menu:"Inserare imagine","menu-button":"Meniu inserare imagine","from-url":"Adres\u0103 URL web","from-camera":"Camera Roll",toolbar:{rotateleft:"Rotire la st\xe2nga",rotateright:"Rotire la dreapta",fliphorizontal:"R\u0103sturnare orizontal\u0103",flipvertical:"R\u0103sturnare vertical\u0103",properties:"Propriet\u0103\u021bi imagine"},crop:{announce:"Accesare interfa\u021b\u0103 decupare. Ap\u0103sa\u021bi Enter pentru aplicare, Escape pentru anulare.",cancel:"Anularea opera\u021biunii de decupare",begin:"Decupare imagine",apply:"Aplicare decupare",handle:{nw:"Ghidare decupare st\xe2nga sus",ne:"Ghidare decupare dreapta sus",se:"Ghidare decupare dreapta jos",sw:"Ghidare decupare st\xe2nga jos",shade:"Masc\u0103 decupare"}}},units:{"amount-of-total":"{0} din {1}"},search:{menu:"G\u0103sire \u0219i \xeenlocuire",field:{replace:"C\xe2mp \xeenlocuire",search:"C\xe2mp c\u0103utare"},search:"C\u0103utare",previous:"Anterior",next:"Urm\u0103torul",replace:"\xcenlocuire","replace-all":"\xcenlocuire peste tot",matchcase:"Potrivire majuscule \u0219i minuscule"},mentions:{initiated:"Men\u021biune creat\u0103, continua\u021bi s\u0103 tasta\u021bi pentru varianta prestabilit\u0103",lookahead:{open:"Caset\u0103 cu variante prestabilite",cancelled:"Men\u021biune anulat\u0103",searching:"C\u0103utare rezultate",selected:"Men\u021biune introdus\u0103 a {0}",noresults:"Niciun rezultat"}},cement:{dialog:{paste:{title:"Op\u021biuni de formatare con\u021binut lipit",instructions:"Alege\u021bi p\u0103strarea sau eliminarea format\u0103rii pentru con\u021binut lipit.",merge:"P\u0103strare formatare",clean:"Eliminare formatare"},flash:{title:"Import imagine local\u0103","trigger-paste":"Declan\u0219a\u021bi lipirea din nou de la tastatur\u0103 pentru a lipi con\u021binutul cu imaginile.",missing:'Adobe Flash este necesar pentru importul imaginilor din Microsoft Office. Instala\u021bi <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a>.',"press-escape":'Ap\u0103sa\u021bi <span class="ephox-polish-help-kbd">ESC</span> pentru a ignora imaginile locale \u0219i a continua editarea.'}}},cloud:{error:{apikey:"Codul dumneavoastr\u0103 API este incorect.",domain:"Domeniul dumneavoastr\u0103 ({0}) nu este compatibil cu codul dumneavoastr\u0103 API.",plan:"A\u021bi dep\u0103\u0219it num\u0103rul de desc\u0103rc\u0103ri editor pe care le ave\u021bi la dispozi\u021bie conform planului dumneavoastr\u0103. Vizita\u021bi site-ul pentru actualizare."},dashboard:"Merge\u021bi la Tabloul de bord al administratorului"},errors:{paste:{notready:"Func\u021bionalitatea de importare document \xeen format Word nu a fost \xeenc\u0103rcat\u0103. V\u0103 rug\u0103m a\u0219tepta\u021bi \u0219i \xeencerca\u021bi din nou.",generic:"A ap\u0103rut o eroare \xeen timpul lipirii con\u021binutului."},toolbar:{missing:{custom:{string:'Comenzile de personalizare trebuie s\u0103 aib\u0103 proprietatea "{0}" \u0219i trebuie s\u0103 fie un \u0219ir'}},invalid:"Configura\u021bia pentru bara de instrumente nu este valid\u0103 ({0}). Consulta\u021bi consola pentru detalii."},spelling:{missing:{service:"Serviciul de corectare ortografic\u0103 nu a fost g\u0103sit: ({0})."}},images:{edit:{needsproxy:"Este necesar un proxy pentru a edita imaginile din acest domeniu: ({0})",proxyerror:"Nu este posibil\u0103 comunicarea cu acest proxy pentru a edita aceast\u0103 imagine. Consulta\u021bi consola pentru detalii.",generic:"S-a constatat o eroare \xeen timpul opera\u021biunii de editare a imaginii. Consulta\u021bi consola pentru detalii."},disallowed:{local:"Lipirea imaginii locale a fost dezactivat\u0103. Imaginile locale au fost eliminate din con\u021binutul lipit.",dragdrop:"Func\u021bia de glisare \u0219i fixare a fost dezactivat\u0103."},upload:{unknown:"\xcenc\u0103rcarea imaginii a e\u0219uat",invalid:"Nu au fost procesate toate fi\u0219ierele - unele nu sunt imagini valide",failed:"\xcenc\u0103rcarea imaginii a e\u0219uat: ({0}).",cors:"Nu poate fi contactat serviciul de \xeenc\u0103rcare imagini. Posibil\u0103 eroare CORS: ({0})"},missing:{service:"Serviciul de imagini nu a fost g\u0103sit: ({0}).",flash:"Set\u0103rile de securitate ale browser-ului dumneavoastr\u0103 pot \xeempiedica importarea imaginilor."},import:{failed:"C\xe2teva imagini nu s-au importat.",unsupported:"Tip imagine incompatibil.",invalid:"Imaginea nu este valid\u0103."}},webview:{image:"Imaginile copiate direct nu pot fi lipite."},safari:{image:"Safari nu accept\u0103 lipirea direct\u0103 a imaginilor.",url:"Solu\u021bii sugerate",rtf:"\xcenv\u0103\u021ba\u021bi cum","browser-settings":"Pentru a lipi imagini, ajusta\u021bi set\u0103rile browser-ului dumneavoastr\u0103."},flash:{crashed:"Imaginile n-au fost importate pentru c\u0103 Adobe Flash pare s\u0103 fi e\u0219uat. Aceast\u0103 eroare poate fi cauzat\u0103 de c\u0103tre lipirea unor documente mari."},http:{400:"Cerere incorect\u0103: {0}",401:"Neautorizat: {0}",403:"Interzis: {0}",404:"Nu s-a g\u0103sit: {0}",407:"Este necesar\u0103 autentificarea proxy: {0}",409:"Conflict fi\u0219ier: {0}",413:"Sarcin\u0103 prea mare: {0}",415:"Tip media incompatibil: {0}",500:"Eroare intern\u0103 server: {0}",501:"Neimplementat: {0}"}}}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("tbio_ro.js","strings for language ro")({version:"2.3.0",strings:a})}();