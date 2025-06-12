

//confetti Test

const confetti ={
    name: "confetti",
    type: "effect",
    match: ({trace} = {}) => trace?.type === "confetti" || trace?.payload === "confetti",
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








export { extension2, genPDF};
