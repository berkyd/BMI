function szamitas()
{
    let mag = parseFloat(document.getElementById("magassag").value);
    let suly = parseFloat(document.getElementById("suly").value);
    let ered = suly/(mag/100)**2;
    document.getElementById("kapottertek").textContent = ered;
}
