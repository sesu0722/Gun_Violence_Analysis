getData();
async function getData() {
   const response = await fetch("/gun_violenceDB/combinData_byState");
   const data = await response.json();
   console.log(data);
   
   var dataset=data[0]
   console.log(dataset)


   labels = [];
   values = [];
   values_a =[];
   values_m =[];
   values_f =[];

   for (i = 0; i < 49; i++) {
      labels.push(dataset.State[i]);
      values.push(dataset.accidentalDeath[i]+dataset.massShootings[i]+dataset.fatalPoliceShootings[i]);
      values_a.push(dataset.accidentalDeath[i])
      values_m.push(dataset.massShootings[i])
      values_f.push(dataset.fatalPoliceShootings[i])
   }
    
   console.log(labels)
   // Bar chart
   new Chart(document.getElementById("bar-chart"), {
      type: 'horizontalBar',
      data: {
         labels: labels,
         datasets: [
            {
               label: "totalDeath",
               backgroundColor: "#A76EAF",
               data: values
            }
         ]
      },
      options: {
         legend: { display: false },
         title: {
            display: true,
            text: 'U.S Death Count'
         },
         scales: {
           y:[{
              ticks:{
                 display: true,
                 autoSkip: false
              }
           }],
           
       }
      }
   });
   // line chart
   new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
       labels: labels,
       datasets: [
          {
            data: values_a, 
            label: "AccidentalDeath",
            borderColor: "#D64550",  
            fill: false  
          },
          {
            data: values_m, 
            label: "MassShootings",
            borderColor: "#2E1E0F",  
            fill: false
          },
          {
            data: values_f, 
            label: "FatalPoliceShootings",
            borderColor: "#A76EAF",  
            fill: false
          }
       ]
    },
    options: {
       legend: { display: true },
       title: {
          display: true,
          text: 'U.S Death Count'
       }
    }
 });




}
//Pie chart
getData2();
async function getData2() {
   const response = await fetch("../gun_violenceDB/combineData_StateParty");
   const data = await response.json();
   console.log(data);
   
   var dataset_p=data[0]
   console.log(dataset_p)

  
   values_a = [dataset_p.accidentalDeath.Democratic, dataset_p.accidentalDeath.Republican];
   values_m = [dataset_p.massShootings.Democratic, dataset_p.massShootings.Republican];
   values_f = [dataset_p.fatalPoliceShootings.Democratic, dataset_p.fatalPoliceShootings.Republican];
  
   console.log(values_a)
  
   new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
         labels: ["Democratic","Republican"],
         datasets: [
            {
               label: "Death by Party Affiliations",
               backgroundColor: ['#334BFF','#D64550'],
               data: values_a
            }
         ]
      },
      options: {
        responsive: true,
        plugins: {
           legend: {display: true, position: 'right'},
           title: {
              display: true,
              text: 'AccidentalDeath by Party',
              padding:{
                 top: 10,
                 bottom:20
              }
           }
         }
       },
          
       });

     new Chart(document.getElementById("pie-chart2"), {
        type: 'pie',
        data: {
           labels: ["Democratic","Republican"],
           datasets: [
              {
                 label: "Death by Party Affiliations",
                 backgroundColor: ['#334BFF','#D64550'],
                 data: values_m
              }
           ]
        },
        options: {
          responsive: true,
          plugins: {
             legend: {display: true,},
             title: {
                display: true,
                text: ' MassShooting Death by Party',
                padding:{
                   top: 10,
                   bottom:20
                }
             }
           }
         },
            
         });
     new Chart(document.getElementById("pie-chart3"), {
        type: 'pie',
        data: {
           labels: ["Democratic","Republican"],
           datasets: [
              {
                 label: "Death by Party Affiliations",
                 backgroundColor: ['#334BFF','#D64550'],
                 data: values_f
              }
           ]
        },
        options: {
           responsive: true,
           plugins: {
              legend: {display: true,},
              title: {
                 display: true,
                 text: 'fatalPoliceShooting by Party',
                 padding:{
                    top: 10,
                    bottom:20
                 }
              }
           }
           },
              
           });
      

  }
  //Pie chart
getData3();
async function getData3() {
  const response = await fetch("/gun_violenceDB/gunOwnership_StateParty");
  const data = await response.json();

  var dataset_g=data[0]
  console.log(dataset_g)

  values_g = [dataset_g.totalGuns.Democratic, dataset_g.totalGuns.Republican];

  new Chart(document.getElementById("pie4-chart"), {
     type: 'pie',
     data: {
        labels: ["Democratic","Republican"],
        datasets: [
           {
              label: "TotalGuns by Party Affiliations",
              backgroundColor: ['#334BFF','#D64550'],
              data: values_g
           }
        ]
     },
     options: {
       responsive: true,
       plugins: {
          legend: {display: true, position: 'right'},
          title: {
             display: true,
             text: 'AccidentalDeath by Party',
             padding:{
                top: 10,
                bottom:20
             }
          }
        }
      },
         
      });
}