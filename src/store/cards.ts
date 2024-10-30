import { defineStore } from "pinia";
import axios from "axios";
import { config } from "./config";
import Cookies from "js-cookie";

enum Language {
    EN = "EN", // Английский
    RU = "RU", // Русский
}

enum CardState {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
}

interface NameAndDescription {
    name: string;        // Имя
    description: string; // Описание
}

interface CardInfo {
    languageNameAndDescriptionMap: Record<Language, NameAndDescription>;
}

interface CardParameters {
    power: number;
    levelPrice: number;
}

interface CardLevelMap {
    cardLevelMap: Record<number, CardParameters>;
    maxLevel: number;
}

enum CardType {
    ECO = "ECO",
    ECO1 = "ECO1",
    ECO2 = "ECO2"
    // TODO: Когда будут известны категории, необходимо переименовать
}

// Интерфейс для файла карты
interface CardFile {
    id: number;
    fileName: string;
    cards: Card[];
}

// Интерфейс для карты
interface Card {
    id: number;
    codeName: string;
    cardInfo: CardInfo;
    image: CardFile;
    state: CardState;
    cardLevelMap: CardLevelMap;
    maxLevel: number;
    isStartCard: boolean;
    cardType: CardType;
}

interface NewCard {
    name: string;
    cardInfo: CardInfo;
    imageId: number;
    cardLevelMap: CardLevelMap;
    isStartCard: boolean;
    cardType: CardType;
}



export const cardsStore = defineStore("cards", {
    state: () => ({
        cards: [] as Card[], // Используем интерфейс Card для типизации массива карт
    }),

    actions: {
        async createCard(newCardData: NewCard) {
            try {
                const response = await axios.post(config.backendURL + "/admin/card/create", {
                    name: newCardData.name,
                    cardInfo: newCardData.cardInfo,
                    imageId: newCardData.imageId,
                    cardLevelMap: newCardData.cardLevelMap,
                    isStartCard: newCardData.isStartCard,
                    cardType: newCardData.cardType,
                });

                const newCard = response.data

                this.cards.push(newCard)
            } catch (error) {
                // throw new Error("Произошла ошибка при регистрации: " + error.message);
            }
        },

        async fetchAllCards(loginData: any) {
            try {
                const response = await axios.get(config.backendURL + "/admin/card/getAll", {
                    params: {
                        login: loginData.login,
                        password: loginData.password,
                    },
                });

            } catch (error) {
                // if (error.response && error.response.status === 403) {
                //   throw new Error("Неправильный пароль или логин");
                // } else {
                //   throw new Error("Произошла ошибка при авторизации: " + error.message);
                // }
            }
        },
    },

    getters: {},
});
