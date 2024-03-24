/* CHALLENGE DESCRIPTION

DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases: Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

RNA is the primary messenger molecule in cells. RNA differs slightly from DNA with its chemical structure and it contains no Thymine. In RNA, Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:
"GCAT"  =>  "GCAU"

The input string can be of arbitrary length, in particular, it may be empty. All input is guaranteed to be valid (i.e., each input string will only ever consist of 'G', 'C', 'A' and/or 'T').
*/

// function that takes in a string
    // string may be empty, arbitrary length, always capped
    // will only include valid inputs - "G", "C", "A", and/or "T", but may have dupes
// return string coverting DNA string to RNA string

// MY SOLUTION
    // replace all instances of "T" with "U"
    // return the string
const convertDNA = str => str.replaceAll("T", "U");

console.log(convertDNA("GCAT"), "GCAU");
console.log(convertDNA("GC"), "GC");
console.log(convertDNA(""), "");
console.log(convertDNA("AT"), "AU");

// OTHER SOLUTION
const DNAtoRNA = dna => dna.split("T").join("U");