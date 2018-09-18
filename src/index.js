module.exports = function solveEquation(equation) {
 arr = equation.split(' ');
if (arr[3]=="-")
{arr[4]=arr[4]*(-1);
}
if (arr[7]=="-")
{arr[8]=arr[8]*(-1);
}
let solut=[];
let Diskriminant = arr[4]*arr[4]-(4*arr[0]*arr[8]);


 solut.push(Math.round(((-1)*arr[4]+Math.sqrt(Diskriminant))/(2*arr[0])));
 solut.push(Math.round(((-1)*arr[4]-Math.sqrt(Diskriminant))/(2*arr[0])));
 
let a=solut[0];
if (solut[0]>solut[1]) {solut[0]=solut[1];
    solut[1]=a;}
return solut;

}
