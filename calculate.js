getResult = () => {
     var studientyp;
     if (document.getElementById('studientyp').value.length > 0)
         studientyp = document.getElementById('studientyp').value + '\xa0|'
     else studientyp = '\xa0\xa0|'

     var basis;
     if (document.getElementById('basis').value.length > 0)
         basis = '\xa0' + document.getElementById('basis').value + '\xa0|'
     else basis = '\xa0\xa0|'

     var zeit;
     if (document.getElementById('zeit').value.length > 0)
         zeit = '\xa0' + document.getElementById('zeit').value + '\xa0|'
     else zeit = '\xa0\xa0|'

     var thema;
     if (document.getElementById('thema').value.length > 0)
         thema = ' ' + document.getElementById('thema').value + '\xa0|'
     else thema = '\xa0\xa0|'

     var anzahl;
     if (document.getElementById('anzahl').value.length > 0)
         anzahl = '\xa0' + document.getElementById('anzahl').value + '\xa0|'
     else anzahl = '\xa0\xa0|'

     var histologie;
     if (document.getElementById('histologie').value.length > 0)
         histologie = ' ' + document.getElementById('histologie').value + '\xa0|'
     else histologie = '\xa0\xa0|'

     var patienteninfo;
     if (document.getElementById('patienteninfo').value.length > 0)
         patienteninfo = '\xa0' + document.getElementById('patienteninfo').value + '\xa0|'
     else patienteninfo = '\xa0\xa0|'

     var stadium;
     if (document.getElementById('stadium').value.length > 0)
         stadium = '\xa0' + document.getElementById('stadium').value + '\xa0|'
     else stadium = '\xa0\xa0|'

     var assesment;
     if (document.getElementById('assesment').value.length > 0)
         assesment = ' ' + document.getElementById('assesment').value + '\xa0|'
     else assesment = '\xa0\xa0|'

     var followup;
     if (document.getElementById('followup').value.length > 0)
         followup = '\xa0' + document.getElementById('followup').value + '\xa0|'
     else followup = '\xa0\xa0|'

     var studienfrage;
     if (document.getElementById('studienfrage').value.length > 0)
         studienfrage = '\xa0' + document.getElementById('studienfrage').value + '\xa0|'
     else studienfrage = '\xa0\xa0|'

     var interventionA1;
     var A = 0;
     if (document.getElementById('interventionA1').value.length > 0)
         interventionA1 = ' Intervention A:\xa0' + document.getElementById('interventionA1').value + ' '
     else { interventionA1 = ' Intervention A:\xa0\xa0';
         A++ }
     var interventionA2;
     if (document.getElementById('interventionA2').value.length > 0)
         interventionA2 = ';\xa0' + document.getElementById('interventionA2').value + '\xa0'
     else { interventionA2 = ';\xa0\xa0';
         A++ }
     var interventionA3;
     if (document.getElementById('interventionA3').value.length > 0)
         interventionA3 = ';\xa0' + document.getElementById('interventionA3').value + '\xa0|'
     else { interventionA3 = ';\xa0\xa0|';
         A++ }

     var interventionB1;
     var B = 0;
     if (document.getElementById('interventionB1').value.length > 0)
         interventionB1 = ' Intervention B:\xa0' + document.getElementById('interventionB1').value + '\xa0'
     else { interventionB1 = ' Intervention B:\xa0\xa0';
         B++ }
     var interventionB2;
     if (document.getElementById('interventionB2').value.length > 0)
         interventionB2 = ';\xa0' + document.getElementById('interventionB2').value + '\xa0'
     else { interventionB2 = ';\xa0\xa0';
         B++ }
     var interventionB3;
     if (document.getElementById('interventionB3').value.length > 0)
         interventionB3 = ';\xa0' + document.getElementById('interventionB3').value + '\xa0|'
     else { interventionB3 = ';\xa0\xa0|';
         B++ }

     var interventionC1;
     var C = 0;
     if (document.getElementById('interventionC1').value.length > 0)
         interventionC1 = '\xa0Intervention C: ' + document.getElementById('interventionC1').value + '\xa0'
     else { interventionC1 = '\xa0Intervention C:\xa0\xa0';
         C++ }
     var interventionC2;
     if (document.getElementById('interventionC2').value.length > 0)
         interventionC2 = ';\xa0' + document.getElementById('interventionC2').value + '\xa0'
     else { interventionC2 = ';\xa0\xa0';
         C++ }
     var interventionC3;
     if (document.getElementById('interventionC3').value.length > 0)
         interventionC3 = ';\xa0' + document.getElementById('interventionC3').value + '\xa0|'
     else { interventionC3 = ';\xa0\xa0|';
         C++ }

     var interventionD1;
     var D = 0;
     if (document.getElementById('interventionD1').value.length > 0)
         interventionD1 = ' Intervention D: ' + document.getElementById('interventionD1').value + '\xa0'
     else { interventionD1 = ' Intervention D:\xa0\xa0';
         D++ }
     var interventionD2;
     if (document.getElementById('interventionD2').value.length > 0)
         interventionD2 = ';\xa0' + document.getElementById('interventionD2').value + '\xa0'
     else { interventionD2 = ';\xa0\xa0';
         D++ }
     var interventionD3;
     if (document.getElementById('interventionD3').value.length > 0)
         interventionD3 = ';\xa0' + document.getElementById('interventionD3').value + '\xa0|'
     else { interventionD3 = ';\xa0\xa0|';
         D++ }

     var outcome11;
     outcome1_count = 0;
     if (document.getElementById('outcome11').value.length > 0)
         outcome11 = ' Outcome I:\xa0' + document.getElementById('outcome11').value + '\xa0'
     else { outcome11 = ' Outcome |:\xa0\xa0';
         outcome1_count++ }
     var outcome12;
     if (document.getElementById('outcome12').value.length > 0)
         outcome12 = '; ' + document.getElementById('outcome12').value + ' |'
     else { outcome12 = ';\xa0\xa0|';
         outcome1_count++ }

     var outcome21;
     var outcome2_count = 0;
     if (document.getElementById('outcome21').value.length > 0)
         outcome21 = ' Outcome II: ' + document.getElementById('outcome21').value + '\xa0'
     else { outcome21 = ' Outcome II:\xa0\xa0';
         outcome2_count++ }
     var outcome22;
     if (document.getElementById('outcome22').value.length > 0)
         outcome22 = '; ' + document.getElementById('outcome22').value + ' |'
     else { outcome22 = ';\xa0\xa0|';
         outcome2_count++ }

     var outcome31;
     var outcome3_count = 0;
     if (document.getElementById('outcome31').value.length > 0)
         outcome31 = ' Outcome III: ' + document.getElementById('outcome31').value + ' '
     else { outcome31 = ' Outcome III:\xa0\xa0';
         outcome3_count++ }
     var outcome32;
     if (document.getElementById('outcome32').value.length > 0)
         outcome32 = '; ' + document.getElementById('outcome32').value + ' '
     else { outcome32 = ';\xa0\xa0|';
         outcome3_count++ }

     var outcome41;
     var outcome4_count = 0;
     if (document.getElementById('outcome41').value.length > 0)
         outcome41 = ' Outcome IV: ' + document.getElementById('outcome41').value + ' '
     else { outcome41 = ' Outcome IV:\xa0\xa0';
         outcome4_count++ }
     var outcome42;
     if (document.getElementById('outcome42').value.length > 0)
         outcome42 = '; ' + document.getElementById('outcome42').value + ' | '
     else { outcome42 = '; \xa0|';
         outcome4_count++ }

     var bemerkung;
     if (document.getElementById('bemerkung').value.length > 0)
         bemerkung = ' ' + document.getElementById('bemerkung').value + ' | '
     else bemerkung = '\xa0\xa0| '

     var interventionA;
     if (A == 3) interventionA = '\xa0\xa0;\xa0\xa0;\xa0\xa0|'
     else interventionA = interventionA1 + interventionA2 + interventionA3

     var interventionB;
     if (B == 3) interventionB = '\xa0\xa0;\xa0\xa0;\xa0\xa0|'
     else interventionB = interventionB1 + interventionB2 + interventionB3

     var interventionC;
     if (C == 3) interventionC = '\xa0\xa0;\xa0\xa0;\xa0\xa0|'
     else interventionC = interventionC1 + interventionC2 + interventionC3

     var interventionD;
     if (D == 3) interventionD = '\xa0\xa0;\xa0\xa0;\xa0\xa0|'
     else interventionD = interventionD1 + interventionD2 + interventionD3



     var outcome1;
     if (outcome1_count == 2) outcome1 = '\xa0\xa0;\xa0\xa0|'
     else outcome1 = outcome11 + outcome12

     var outcome2;
     if (outcome2_count == 2) outcome2 = '\xa0\xa0;\xa0\xa0|'
     else outcome2 = outcome21 + outcome22

     var outcome3;
     if (outcome3_count == 2) outcome3 = '\xa0\xa0;\xa0\xa0|'
     else outcome3 = outcome31 + outcome32

     var outcome4;
     if (outcome4_count == 2) outcome4 = '\xa0\xa0;\xa0\xa0|'
     else outcome4 = outcome41 + outcome42


     document.getElementById("result").innerHTML = studientyp + basis + zeit + ' ' + '<br>' + thema + anzahl + histologie + patienteninfo + stadium + assesment + followup + studienfrage + interventionA + interventionB + interventionC + interventionD + outcome1 + outcome2 + outcome3 + outcome4 + bemerkung + document.getElementById('dialogID').value

    $('body,html').animate({ scrollTop: $('body').height() }, 2000);

 }