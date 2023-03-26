// In DNA strings, symbols "A" and "T" are complements of each other, 
// as "C" and "G". Your function receives one side of the DNA (string, 
// except for Haskell); you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    const complementary = dna.split("").map(sym => {
      if (sym === "A") {
        return "T"
      } else if (sym === "T") {
        return "A"
      } else if (sym === "C") {
        return "G"
      } else if (sym === "G") {
        return "C"
      }
    }).join("")
    return complementary
  }