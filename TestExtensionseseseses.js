
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

const dialogPDF = {
        name: "dialogPDF",
        type: "effect",
        match: ({trace} = {}) => trace?.type === "dialogPDF" || trace?.payload === "dialogPDF",
        effect: ({}) => {
                    const dialog_select = document.querySelectorAll(".vfrc-chat--dialog.vfrc-chat-dialog.s9t60i6");  
                    const lastElement = dialog_select[dialog_select.length - 1];
                    const dialog = lastElement ? lastElement.textContent.trim() : "Kein Text gefunden.";  // Fallback-Text, falls das Element nicht gefunden wird
            
                    window.generatePDF = async function () {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();
                    doc.text(dialog, 10, 10);
                    doc.save("Gesamter Dialog.pdf");
                };
                 window.generatePDF();
        }
    };


const responsePDF = {
        name: "responsePDF",
        type: "effect",
        match: ({trace} = {}) => trace?.type === "responsePDF" || trace?.payload === "responsePDF",
        effect: ({trace}) => {
               
            
                    window.generatePDF = async function () {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();

                    let message = "Standard-PDF-Inhalt";

            try {
                // Payload ist ein String – versuche, es in ein Objekt umzuwandeln
                // Ersetze test: durch "test": falls nötig (Quickfix)
                const rawPayload = trace.payload;
                

            
                message = rawPayload
            } catch (err) {
                console.warn("Fehler beim replacen", err);
            }
                    
                    doc.text(message, 10, 10);
                    doc.save("response Dialog.pdf");
                };
                 window.generatePDF();
        }
    };

const utterancePDF = {
        name: "utterancePDF",
        type: "effect",
        match: ({trace} = {}) => trace?.type === "utterancePDF" || trace?.payload === "utterancePDF",
        effect: ({}) => {
                    const dialog_select = document.querySelectorAll("._15emaa41");  
                    const lastElement = dialog_select[dialog_select.length - 1];
                    const dialog = lastElement ? lastElement.textContent.trim() : "Kein Text gefunden.";  // Fallback-Text, falls das Element nicht gefunden wird
            
                    window.generatePDF = async function () {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();
                    doc.text(dialog, 10, 10);
                    doc.save("utterance Dialog.pdf");
                };
                 window.generatePDF();
        }
    };



export { confetti, genPDF,dialogPDF,responsePDF,utterancePDF};
