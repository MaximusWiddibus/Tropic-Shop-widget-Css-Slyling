
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
    const rawPayload = trace.payload;

    // Falls payload ein JSON-String ist, aber defekt
    if (typeof rawPayload === "string") {
        // Versuche den Inhalt zwischen den Quotes nach dem ersten : zu bekommen
        const match = rawPayload.match(/"[^"]*"\s*:\s*"([\s\S]*)"\s*}/);
        if (match && match[1]) {
            message = match[1].replace(/\\"/g, '"'); // Escaped Quotes wieder zurückwandeln
        } else {
            message = rawPayload;
        }
    } else if (typeof rawPayload === "object") {
        message = Object.values(rawPayload)[0]; // z. B. payload = { Tropi: "..." }
    }
} catch (err) {
    console.warn("Fehler beim Parsen", err);
}
                
                    const messageCorrected= doc.splitTextToSize(message, 180); // Zeilen umbrechen
                    doc.text(messageCorrected, 10, 10);
                    doc.save("response Dialog.pdf");
                };
                 window.generatePDF();
        }
    };

const dialogPDF = {
        name: "dialogPDF",
        type: "effect",
        match: ({trace} = {}) => trace?.type === "dialogPDF" || trace?.payload === "dialogPDF",
        effect: ({trace}) => {
               
            
                    window.generatePDF = async function () {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();

                    let message = "Standard-PDF-Inhalt";
            try {

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
        effect: ({trace}) => {
               
            
                    window.generatePDF = async function () {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();

                    let message = "Standard-PDF-Inhalt";
            try {

                const rawPayload = trace.payload;
                message = rawPayload
            } catch (err) {
                console.warn("Fehler beim replacen", err);
            }      
                    doc.text(message, 10, 10);
                    doc.save("utterance.pdf");
                };
                 window.generatePDF();
        }
    };




export { confetti, genPDF, responsePDF, dialogPDF,utterancePDF};
