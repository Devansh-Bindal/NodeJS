const studentData=
[
    {
        Username:'dev_01',
        Password:'Abcdef',
        FirstName:'Devansh',
        LastName:'Bindal',
        Branch:'CSE-E'
    },
    {
        Username:'vip_02',
        Password:'aBcdef',
        FirstName:'Vipul',
        LastName:'Chikara',
        Branch:'CSE-CCV'
    },
    {
        Username:'sak_03',
        Password:'abCdef',
        FirstName:'Saket',
        LastName:'Kumar',
        Branch:'CSE'
    },
    {
        Username:'sid_04',
        Password:'abcDef',
        FirstName:'Siddhant',
        LastName:'Sharma',
        Branch:'CSE-BDA'
    },
    {
        Username:'jay_05',
        Password:'abcdEf',
        FirstName:'Jay',
        LastName:'Patel',
        Branch:'CSE-CSF'
    },
    {
        Username:'ton_06',
        Password:'abcdeF',
        FirstName:'Tony',
        LastName:'Kakkar',
        Branch:'EC'
    },
]
filterStudents=(branchName)=>{
    return studentData.filter(student=>student.Branch===branchName);
}
module.exports={
    studentData,
    filterStudents
}












