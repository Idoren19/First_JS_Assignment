function kgToPounds(name, weightKg) {

    const weightPounds = weightKg * 2.20462;
    
    const resultString = `${name}, your weight is ${weightPounds.toFixed(2)} pounds.`;
    
    return resultString;
  }
  
  const userName = prompt("Please enter your name:");
  
  const userWeightKg = parseFloat(prompt("Please enter your weight in kilogram:"));
  
  
  const result = kgToPounds(userName, userWeightKg);
  alert(result);
  