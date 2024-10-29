# React Voting App Rapport

Dette er en stemmegivningsapp hvor man kan sende inn kandidater med navn og bilde, som deretter vises på siden. Alle kandidatkort har navn, bilde og tre knapper som kan trykkes på: "Yes", "No" og "Delete". Jeg valgte å legge inn et felt for bilder for å gjøre appen mer spennende visuelt sett. Selve stylingen er enkel, med god kontrast. For øyeblikket er den ikke spesielt responsiv. Totalsummen for alle kandidaters stemmer vises på siden slik at man har full oversikt over alle stemmene som har kommet inn. Under totalsummen er det et historikk-felt som viser hvem som har fått eller mistet en stemme, pluss dato og klokkeslett. På samme linje som opplastningsfeltet har jeg plassert en søkefunksjon som filtrerer kandidater basert på deres navn og det som skrives inn i feltet. 

Alt i alt har jeg laget fem komponenter: Header, Candidates, VoteCounter, TotalVotes og Footer.
Her har det vært mye nytt og spennende å sette seg inn i, inkludert de obligatoriske som props og useState, 
men også useEffect, localStorage og base64.

Jeg har valgt å bruke localStorage for å lagre kandidater slik at de ikke forsvinner når siden oppdateres, det samme gjelder alle stemmer som kommer inn. På grunn av localStorage var jeg også nødt til å ta i bruke useEffect for å håndtere sideeffekter. Deretter fant jeg ut at localStorage ikke kan lagre bilder direkte, og måtte derfor konvertere bildefiler lastet opp via opplastningsfeltet til base64-format. Base64-strengen lagres som tekst og brukes til å gjenskape bildet når siden lastes inn på nytt. Oppsettet av denne Base64-funksjonen fikk jeg god hjelp av ChatGPT til å skrive, men det har vært lærerikt.

Jeg begynte med App.jsx for å få en liten oversikt over komponenter som kunne være nyttige å ha med, deretter begynte jeg på Candidates. Så valgte jeg å lage en egen VoteCounter-komponent som jeg hentet inn i Candidates for å gjøre det litt mere oversiktlig. Jeg laget også en egen komponent for TotalVotes som jeg da kunne plassere på siden av selve kandidatfeltet. Det siste jeg implementerte var historikkboksen som viser listen over alle stemmer som er gitt og mistet, og navnet på kandidatene det gjelder.

Siden det har vært så mye forskjellig å sette seg inn i, ser jeg for meg at appen med tiden kan forenkles, videreutvikles og gjøres mer oversiktlig ettersom jeg lærer og forstår enda mer av React.

Verktøy brukt i denne oppgaven:
Google search
Youtube
ChatGPT
React.dev
Skolens ukesoppgaver
Freecodecamp
