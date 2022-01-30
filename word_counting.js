function fn1()
    	{
           
           var string=document.getElementById("textArea").value; 
           var word_count=0,char_count=0,small_letter_count=0,capital_letter_count=0,sentence_count=0,letters_count,i;
          for(i=0;i<string.length;i++)
        {

           if(string[i]==' ')
           {
              word_count++;
           }
           if(string[i]!=' ')
           {
              char_count++;
           }
           if(string[i]>='a'&&string[i]<='z')
           {
              small_letter_count++;
           }
           if(string[i]>='A'&&string[i]<='Z')
           {
              capital_letter_count++;
           }
           if(string[i]=='.'||string[i]=='?')
           {
              sentence_count++;
           }

        }
        letters_count=small_letter_count+capital_letter_count;
        word_count=word_count+1;
        char_count=char_count+word_count-1;

        document.getElementById("counting1").innerHTML="Words : "+   word_count;
        document.getElementById("counting2").innerHTML="Characters : "+char_count;
        document.getElementById("counting3").innerHTML="Small Letters : "+small_letter_count;
        document.getElementById("counting4").innerHTML="Capital Letters : "+capital_letter_count;
        document.getElementById("counting5").innerHTML="Letters : "+letters_count;
        document.getElementById("counting6").innerHTML="Sentences : "+sentence_count;
       
      }