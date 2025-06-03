

//confetti Test

const extension2 ={
    name: "extension2",
    type: "effect",
    match: ({trace} = {}) => trace?.type === "extension2" || trace?.payload === "extension2",
    effect: ({})=>  {
      const canvas = document.querySelector('#confetti-canvas')

      var myConfetti = confetti.create(canvas,{
        resize: true,
        useWorker: true,
      })
      myConfetti({
        particleCount: 200,
        spread: 160,
      })
    }
  };

//Generate PDF 
const genPDF = {
        name: "genPDF",
        type: "effect",
        match: ({trace} = {}) => trace?.type === "genPDF" || trace?.payload === "genPDF",
        effect: ({}) => {
                  window.generatePDF = async function () {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();
                    doc.text("PDF erstellt über Voiceflow!", 10, 10);
                    doc.save("voiceflow.pdf");
                };
                 window.generatePDF();
        }
    };



const InfoText = {
  name: 'InfoText',
  type: 'effect',
  match: ({ trace } = {}) => trace?.type === 'InfoText' || trace?.payload?.name === 'InfoText',
  effect: ({}) => {
    const target = document.querySelector('.jsli361.jsli363');
    
    if (target) {
      target.innerHTML = `
        <span style="font-weight:bold; font-family: Arial;">Info:</span>
        <span style="font-weight:normal; font-family:'Open Sans';"> Alle Angaben sind Unverbindlich |</span>
      `;
    }
  },
};




export { extension2, genPDF, InfoText};
