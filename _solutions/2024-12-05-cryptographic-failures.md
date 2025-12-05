---
layout: default
title:  "Cryptographic Failures"
date:   2024-12-05 12:00:00 -0500
categories: BUG Bounty
---


# Cryptographic failures
Section 4: 
## Hashing 


Hashing is a one way function use for checking integrity of digital things like packages,content etc. 
Mainly two types
1. Cryptographic (MD5,SHA256) used for security
2. Non Cryptographic (CRC32,FNV-1a) used for data structures and data distributions, compilers etc. not good for security but fast.

## IMPORTANT : You Cannot DECODE or DECRYPT hash (one way function)

## Steps to crack it:
Strong passwords stored with modern hashing algorithms and using hashing best practices should be effectively impossible for an attacker to crack. 


1. Selecting a password you think the victim has chosen (e.g.password1!)
2. Calculating the hash
3. Comparing the hash you calculated to the hash of the victim. If they match, you have correctly "cracked" the hash and now know the plaintext value of their password.

Usually, the attacker will repeat this process with a list of large number of potential candidate passwords, such as:

Lists of passwords obtained from other compromised sites
Brute force (trying every possible candidate)
Dictionaries or wordlists of common passwords

## SALTING
A salt is a unique, randomly generated string that is added to each password as part of the hashing process. As the salt is unique for every user, an attacker has to crack hashes one at a time using the respective salt rather than calculating a hash once and comparing it against every stored hash. This makes cracking large numbers of hashes significantly harder, as the time required grows in direct proportion to the number of hashes.

## PEPPERING
Peppering in hashing adds a secret, random string (the "pepper") to a password before hashing, creating an extra layer of security beyond salting, where the pepper is stored separately from the database (e.g., in a config file or HSM) and not with the salted hash. This prevents attackers from cracking passwords even if they steal the entire database, as they also need to breach the separate system holding the secret pepper to reverse the hashes.

## WORK FACTOR
Work factor is the computation intensity cost you have to pay to crack the hash. KEEP IT MEDIUM for high perfomance and high security. LOW WORK FACTOR can compromise security leading to attacks and HIGH WORK FACTOR leads to perfomance issues of every time password being hashed and DOS (Denial of Service) Attacks.

## Assignment in WEBGOAT (answer)

TO FIND THE HASH's plain text value you have to find the hash type and hash length 32 and 64 which is cryptographic which means -> MD5, SHA256 etc
you can use online hashing websites and guess different passwords like password1 or 12345678, admin , 987654321 etc

see if it matches the hash here it matches on 
5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8 (matches)
5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8 <- sha256 <- password <- plain text used

21232f297a57a5a743894a0e4a801fc3 (matches)
21232F297A57A5A743894A0E4A801FC3 <- MD5 <- admin <- plain text used

<img width="1455" height="339" alt="Screenshot 2025-12-05 185108" src="https://github.com/user-attachments/assets/bc822223-5978-4fd6-bdea-5587aa38ecb9" />


So the correct guess values are admin and password

## MODERN HASHING ALGORITHMS (includes international characters)

1. ARGON2
2. Bcrypt
3. scrypt
4. PBKDF2

CHECK this for more information -> https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

## Summary
This is my first solutions of webgoat setting up for my future documentation for my bug bounty learning and documentations.


[< Back to Home](/)
