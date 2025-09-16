let totalVente;

function calculateIndex() {

    const pmsPrice = 1800;
    const agoPrice = 1800;

    const pms1 =Number(document.getElementById("pms1").value);
    const pms2 =Number(document.getElementById("pms2").value);
    const pms3 =Number(document.getElementById("pms3").value);
    const pms4 =Number(document.getElementById("pms4").value);
    const ago1 =Number(document.getElementById("ago1").value);
    const ago2 =Number(document.getElementById("ago2").value);
    const ago3 =Number(document.getElementById("ago3").value);
    const ago4 =Number(document.getElementById("ago4").value);
    
    const amountPms1 = (pms2 - pms1)*pmsPrice;
    const amountPms2 = (pms4 - pms3)*pmsPrice;
    const totalPms = amountPms1 + amountPms2

    const amountAgo1 =(ago2 - ago1)*agoPrice;
    const amountAgo2 =(ago4 - ago3)*agoPrice;
    const totalAgo = amountAgo1 + amountAgo2

    totalVente = totalAgo + totalPms;

    document.getElementById("resultpms").textContent = totalPms;
    document.getElementById("resultago").textContent = totalAgo;
    document.getElementById("result").textContent = totalVente;
}

function payments() {
    const momo = Number(document.getElementById("momo").value);
    const momoLoss = Number(document.getElementById("momoLoss").value);
    const terminal = Number(document.getElementById("terminal").value);
    const fiche = Number(document.getElementById("fiche").value);
    const bankCard = Number(document.getElementById("bankCard").value);
    const cash = Number(document.getElementById("cash").value);

    const totalPayments = momo+ momoLoss + terminal + fiche + bankCard + cash ;
    const gainPayment = totalPayments - totalVente;

    document.getElementById("totalPayments").textContent = totalPayments;  
    document.getElementById("gainPayment").textContent = gainPayment;
}

function stock() {
    const initialPms = Number(document.getElementById("initialPms").value);
    const ventePms = Number(document.getElementById("ventePms").value);
    const initialAgo = Number(document.getElementById("initialAgo").value);
    const venteAgo = Number(document.getElementById("venteAgo").value);
    const receivedPms = Number(document.getElementById("receivedPms").value);
    const receivedAgo = Number(document.getElementById("receivedAgo").value);
    const stockPms = Number(document.getElementById("stockPms").value);
    const stockAgo = Number(document.getElementById("stockAgo").value);


    const theoryStockPms = initialPms + receivedPms - ventePms ;
    const theoryStockAgo = initialAgo + receivedAgo - venteAgo ;

    const gainFuelPms = stockPms - theoryStockPms ;
    const gainFuelAgo = stockAgo - theoryStockAgo ;

    document.getElementById("theoryStockPms").textContent = theoryStockPms;
    document.getElementById("theoryStockAgo").textContent = theoryStockAgo;
    document.getElementById("gainFuelPms").textContent = gainFuelPms;
    document.getElementById("gainFuelAgo").textContent = gainFuelAgo;
    
}