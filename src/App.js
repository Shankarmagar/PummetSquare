import React from 'react';
import './App.css';


let genotype = [];
let status;
let phenotypeStatus;
function generatePummettSquare() {

  let Dominantcount = 0;
  let RecessiveCount = 0;
  // Get the values of Parent 1 and Parent 2
  const parent1 = document.getElementById("parent1").value;
  const parent2 = document.getElementById("parent2").value;

  const dominantTraits = document.getElementById("dominant").value;
  const RecessiveTraits = document.getElementById("recessive").value;
  

  const OutputTable = document.getElementById("GeneratedTable");
  let Output = "<tr><th><img src='Slash.png'></th>";
  for(let i = 0; i < parent1.length; i++)
  {
    Output += "<th>" + parent1[i] + "</th>";
  }
  Output += "</tr>";
  for (let j = 0; j< parent2.length;j++)
  {
    Output+= "<tr><td>" + parent2[j] + "</td>";
    for(let i = 0; i<parent1.length;i++)
    {
      let gene = parent2[j]+parent1[i];
      genotype.push(gene);
      if(parent2[j] === parent1[i])
      {
        if(parent2[j] === parent2[j].toLowerCase())
        {
      status = "homozygosity recessive";
      phenotypeStatus = RecessiveTraits;
      RecessiveCount++;
        }
        else{
          status = "homozygosity dominance";
          phenotypeStatus = dominantTraits;
          Dominantcount++;
        }
      }
      else{
        status = "heterozygosity dominance";
        phenotypeStatus = dominantTraits;
        Dominantcount++;
      }
      Output+= "<td>" +gene+ "<br>" +status + "<br> "+ "Phenotype = "+ phenotypeStatus+"</td>";
    }
    Output+= "</tr>";
  }

  OutputTable.innerHTML = Output + " <br>Genotype: " + genotype.join(",") +"<br> Phenotypic ratio: "+ Dominantcount+ ":"+ RecessiveCount;

  const element = document.querySelector(".Additional_info");
  element.style.display = 'block';
}

function resetForm() {
  document.getElementById("parent1").value = "";
  document.getElementById("parent2").value = "";
  document.getElementById("dominant").value = "";
  document.getElementById("recessive").value = "";
  document.getElementById("GeneratedTable").innerHTML = "";
  genotype = [];
  document.getElementById("info").style.display = 'none';
}

function App() {
  return (
    <div className="App">
      <h1>Created By Shankar Ale Magar</h1>
      <p>Project of ANTHP</p>
      <p>Professor : Zichello</p>
      <header className="App-header">
        <h1>Pummet Square Generator</h1>
        <p>Enter the genotypes of Parents</p>
        <label htmlFor="parent1">Parent 1:</label>
        <input type="text" id="parent1" placeholder="e.g. AA" required />
        <label htmlFor="parent2">Parent 2:</label>
        <input type="text" id="parent2" placeholder="e.g. aa" required />
        <label htmlFor='Dominant'>Dominant traits:</label>
        <input type="text" id="dominant" placeholder="e.g brown eyes"required></input>
         <label htmlFor='Recessive'>Recessive traits:</label>
        <input type="text" id="recessive" placeholder='e.g. blue eyes' required></input>
        <button onClick={generatePummettSquare}>Generate Pummett Square</button>
        <button onClick={resetForm}>Reset</button>
        <div className='Separate'>
          <table id="GeneratedTable"></table>
        </div>
        <div className="Additional_info" id ="info">
        <p> Additional Info: </p>
        <p><ol>Homozygosity: The condition in which the two alleles of the gene pair are identical</ol><ol>Heterozygosity: The condition in which the two alleles of the gene pair are not identical</ol><ol>Dominance: The form of a trait observable in heterozygotes</ol><ol>Recessive: The form of the trait observable only in homozygotes</ol></p>
        </div>
      </header>
    </div>
  );
}

export default App;