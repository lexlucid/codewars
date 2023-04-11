// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// P: take in a string, only "S", "O", and "I" need to be handled,
//    only uppercase strings
// R: returns string with letter error corrected

function correct(string)
{
  return string.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I")
}

// correct("L0ND0N") // Returns "LONDON"
// correct("51NGAP0RE") // Returns "SINGAPORE"
// correct("1NTERE5T") // Returns "INTEREST"

