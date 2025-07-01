

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
        effect: ({trace}) => {
            
            window.generatePDF = async function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
    
            let message = "Es ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.";
                try {
                    const rawPayload = trace.payload;
                    message = rawPayload;
                    } catch(err){
                        console.log("Fehler beim speichern",err)
                        };
                
            const messageCorrected= doc.splitTextToSize(message, 180); // Zeilen umbrechen
            doc.text(messageCorrected, 10, 10);
            doc.save("Tropic Shop Dialog.pdf");
            };
            
        window.generatePDF();
        }
    };









export { confetti, genPDF};
