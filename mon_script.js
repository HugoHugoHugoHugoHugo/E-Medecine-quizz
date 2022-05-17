function traitement_score()
{
	var score=0;
	
	var nom=document.getElementById("NOM").value;
	var prenom=document.getElementById("Prenom").value;

	var Rep_1=document.getElementsByName("Q1");
	for (var i=0; i<Rep_1.length; i++)
	{
		if (Rep_1[i].checked)
		{
			if(i==3)
			{
				score++;
				document.getElementById("q1").style.color="green";
				document.getElementById("q1").style.fontWeight="bold";
			}
			else
			{
				document.getElementById("q1").style.color="red";
				document.getElementById("q1").style.fontWeight="bold";
			}
			alert(Rep_1[i].value);
			break;
		}
	}
	
	document.getElementById("score").style.color="blue";
	document.getElementById("score").innerHTML="Bonjour "+prenom+" "+nom+", votre score est de : "+score+" / 1";
}
