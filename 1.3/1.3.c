#include<stdio.h>
	int main() {
		int dias, VB, VL;
		printf("Escreva os dias:\n");
		scanf("%i", &dias);
        VB = dias * 200;
		printf("\nValor Liquido:");
		printf("%d", VB - (VB * 0.11 + VB*0.25));
	}