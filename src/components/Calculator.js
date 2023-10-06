// This is hardcode, these eqeations will need to take in the variable as an imput parameter. I will need help descerning what numbers are essential components
//to the equation, and what are the hardcoded numbers that i will be replacing with variable names. 

// Saturation vapor density calculation (same as before)
const SVD = (P_V * Mol) / (R * Temp);

// Water vapor density in g/m^3 (same as before)
const rho = SVD * RH * 1000;

// Gaseous attenuation calculation (ITU-R P.676)
function gaseous_attenuation(freq, elev, rho, Press, Temp, h) {
  const p = Press / 1013.25; // Convert pressure to standard atmosphere
  const T = Temp - 273.15; // Convert temperature to Celsius
  const e = rho * (T + 273.15) / 216.7; // Water vapor pressure (hPa)
  
  const f = freq; // Frequency in GHz
  const P = p * 1013.25; // Pressure in hPa
  
  const A = (1.0003 + 3.15e-6 * P) / (1 + 0.537e-6 * p); // Adjusted pressure
  
  const e_pr = e * A; // Water vapor pressure at reference point (hPa)
  const rho_pr = e_pr / (0.003793 * T + 0.00418); // Water vapor density at reference point (g/m^3)
  
  const g = 9.80665; // Standard gravity (m/s^2)
  const L = -0.0065; // Temperature lapse rate (K/m)
  const h_pr = h * 1000; // Convert height to meters
  
  const T_pr = T + 273.15; // Convert temperature to Kelvin
  const T_01 = T_pr + L * h_pr; // Temperature at reference point (K)
  
  const p_pr = P * Math.exp((g * Mol * h_pr) / (R * T_pr * (1 + L * h_pr / T_01))); // Pressure at reference point (hPa)
  
  const alpha = (8.686 * f * f * e_pr * (1.0 + 1.8e7 / (f * f)) / (T_01 * T_01 * T_01 * T_01 * T_pr * p_pr)) * 1e-6; // Gaseous attenuation (dB/km)
  
  return alpha;
}

// Cloud attenuation calculation (ITU-R P.840)
function cloud_attenuation(lati, long, elev, freq, P_e) {
  // Implement the cloud attenuation calculation here
  // This calculation requires detailed cloud information and models
  // which can vary greatly depending on the specific scenario.
  // Consult ITU-R P.840 for the full methodology.
  // Replace the following line with the actual calculation.
  return 0;
}

// Rain attenuation calculation (ITU-R P.618)
function rain_attenuation(lati, long, freq, elev, P_e) {
  // Implement the rain attenuation calculation here
  // This calculation also depends on detailed rainfall data and models.
  // Consult ITU-R P.618 for the full methodology.
  // Replace the following line with the actual calculation.
  return 0;
}

// Scintillation attenuation calculation (ITU-R P.618)
function scintillation_attenuation(lati, long, freq, elev, P_e, dia, eta) {
  // Implement the scintillation attenuation calculation here
  // This calculation involves scintillation index and related factors.
  // Consult ITU-R P.618 for the full methodology.
  // Replace the following line with the actual calculation.
  return 0;
}

// Total atmospheric attenuation calculation (ITU-R P.618)
function atmospheric_attenuation(lati, long, freq, elev, P_e, dia, h) {
  const gass_loss = gaseous_attenuation(freq, elev, rho, Press, Temp, h);
  const cloud_loss = cloud_attenuation(lati, long, elev, freq, P_e);
  const rain_loss = rain_attenuation(lati, long, freq, elev, P_e);
  const scin_loss = scintillation_attenuation(lati, long, freq, elev, P_e, dia, 0.5);
  
  const total_loss = gass_loss + cloud_loss + rain_loss + scin_loss;
  return total_loss;
}

// Calculate attenuations (same as before)

// Print results (same as before)
console.log("Gasses Attenuation: ", gass_loss);
console.log("Clouds Attenuation: ", cloud_loss);
console.log("Rain Attenuation: ", rain_loss);
console.log("Scintillation Attenuation: ", scin_loss);
console.log("Atmospheric Attenuation: ", tot_atm_loss);



// implemented simplified versions of the calculations for gaseous attenuation
// (ITU - R P.676) and provided placeholders for cloud, rain, and scintillation attenuations.
//   For accurate results, consult the relevant ITU - R recommendations(e.g., ITU - R P.676, ITU - R P.840, ITU - R P.618)
//  and implement the full methodologies, which may involve more complex calculations and data requirements.

//  implementing these calculations accurately and reliably can be a complex task,
//  and you may need access to specialized data sources and models for cloud, rain, and scintillation calculations.