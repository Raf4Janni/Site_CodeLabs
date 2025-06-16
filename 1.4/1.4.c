#include<stdio.h>
	int main() {
		int CM, MO, largura, altura, parede;
		printf("De as medidas da parede, largura e altura\n");
		scanf("%i", &largura);
		scanf("%i", &altura);
		CM = altura * largura * 20 / 5;
		MO = altura * largura * 30 / 10;
		printf("Mao de obra: R$%i", MO);
		printf("\nCusto do material: R$%i ", CM);
        input("Pressione ENTER para finalizar");
    }