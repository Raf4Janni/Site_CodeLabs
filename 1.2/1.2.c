#include<stdio.h>
	int main () {
		int C, F;
		printf("Escreva a temperatura em Celsius:\n");
		scanf("%i", &C);
		printf("A temperatura em Fahrenheit eh:\n");
		printf("%d", (C * 9) / 5 + 35);
		return 0;
}
		
	