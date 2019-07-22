import { Injectable } from "@angular/core";

import { GlossaryItem } from "./glossary-item";
import { File } from "tns-core-modules/file-system/file-system";
import { SettingsService } from "../services/settings.service";
@Injectable({
    providedIn: "root"
})
export class GlossaryService {

    // start and crescent 0xf699
    // kaaba 0xf66b
    // Mosque 0xf678
    //
    readonly defaultIconCharCode: number = 0xf66b;

    // contem os items do glossário carregado
    private items: Array<GlossaryItem>;
    // contem a versão do glossário carregado
    private version: string;
    constructor(private settings: SettingsService) {
        try {
            if (this.settings.debug) console.log("Carregando glossary offline do arquivo!");
            let glossary: any = this.settings.getFile("glossary.json");
            this.version = glossary.version;
            this.items = glossary.items;
            if (this.settings.debug) {
                console.log("Carregamento completo! ", this.items.length);
            }
        } catch (e) {
            if (this.settings.debug) console.log("Carregando glossary offline interno! ", e);
            this.items = new Array<GlossaryItem>(
                { id: 0, name: "offline", translate: "", description: "Se você está vendo este termo, é porque foi carregado o glossário interno, isso ocorre quando a aplicação por uma falha qualquer não encontra o arquivo ../data/glossary.json ou não consegue acessar a internet" },
                { id: 1, name: "Adhan", translate: "أذان", description: "A chamada para a oração" },
                { id: 2, name: "Ahadith [sing. Hadith]", translate: "أحاديث [sing. حديث]", description: "Os provérbios e tradições do Profeta Muhammad (a paz e as benção de Allah estejam sobre ele)." },
                { id: 3, name: "Ahkam", translate: "أحكام", description: "Decisões e ordens derivadas do Alcorão e da Sunna.Cinco tipos de ordens: Wajib, Mustahab, Mubah, Makruh e Haram." },
                { id: 4, name: "Ahl al-Kitab", translate: "أهل الكتاب", description: "\"Povo da Escritura\". Refere-se a judeus, cristãos e sabeus." },
                { id: 5, name: "Akhirah", translate: "آخرة", description: "A partir de agora." },
                { id: 6, name: "`Alayhi As-Salaam", translate: "عليه السلام", description: "\"A paz esteja com ele.\" Esta expressão seguinte após a nomeação de um profeta (exceto Muhammad), ou um dos Anjos nobre (ou seja, Jibril (Gabriel), Mikaeel (Michael), etc)" },
                { id: 7, name: "AlhamdulilLah", translate: "الحمد لله", description: "Louvado seja Deus!" },
                { id: 8, name: "Allah", translate: "الله", description: "Deus, a única divindade digna de adoração. Ela deriva da palavra \"Ilah\" que significa \"Aquele que merece louvor de tudo,\" Aquele a quem todos os corações apresentar  amor, medo, reverência, confiança e sinceridade." },
                { id: 9, name: "Allahu Akbar", translate: "الله أكبر", description: "Deus é o Maior" },
                { id: 10, name: "`Alim [pl. 'Ulama']", translate: "عالِم [pl.علماء]", description: "Um estudioso de qualquer área do conhecimento. No contexto do Fórum Islâmico, é a conotação de um erudito religioso." },
                { id: 11, name: "Ansar", translate: "أنصار", description: "Literalmente, significa \"ajudantes\". Na história islâmica, Ansar eram os partidários do profeta Muhammad (a paz e as bençãos de Allah estejam sobre ele), que saudou os muçulmanos de Madina." },
                { id: 12, name: "`Aqeedah", translate: "عقيدة", description: "O credo islâmico, ou o artigo sexto da fé, que consiste na crença em Deus, anjos, profetas, Escrituras, o Dia do Julgamento e Destino." },
                { id: 13, name: "As-Salamu `Alaykum", translate: "السلام عليكم", description: "A saudação islâmica, cuja tradução é \"A paz de Allah esteja convosco.\" Além disso, wa RaḥmatulLahi wa BarakatuHu (ورحمة الله وبركاته) significa \"A misericórdia de Deus e a Sua bênção.\" A resposta a esta saudação é Wa Alaykum As-Salam Wa RahmatulLahi wa BarakatuHu (و عليكم السلام ورحمة الله وبركاته), que significa \"E a paz e a misericórdia de Deus e a Sua bênção esteja sobre você." },
                { id: 14, name: "AstaghfirAllah", translate: "أستغفر الله", description: "Eu busco o perdão de Deus." },
                { id: 15, name: "A`udhubilLah", translate: "أعوذ بالله", description: "Eu busco refúgio em Deus" },
                { id: 16, name: "Ayah [pl. Ayat]", translate: "آية [pl. آيات]", description: "Literalmente, significa \"um sinal\". Um versículo do Alcorão Sagrado." },
                { id: 17, name: "Barak Allahu Feekum", translate: "بارك الله فيكم", description: "Que Deus te abençoe." },
                { id: 18, name: "Bid`ah", translate: "بدعة", description: "Inovação na religião. Bad Oferta »ahs no Islã. São consideradas um desvio e um pecado grave por muitos muçulmanos." },
                { id: 19, name: "BismilLah", translate: "بسم الله", description: "Em nome de Allah." },
                { id: 20, name: "BismilLahi Ar-Rahman Ar-Raheem", translate: "بسم الله الرحمن الرحيم", description: "Em nome de Allah, o Clemente, o Misericordioso" }

            );
        }
    }
    /**
     * Retorna o objeto que representa o termo informado;
     *
     * @param term nome do ter mo a ser procurado
     */
    findIdByTerm(term: string): GlossaryItem {
        let items = this.getItems();
        for (let item of items) {
            if (item.name == term) return item
        }
    }
    getItems(): Array<GlossaryItem> {
        return this.items;
    }

    getItem(id: number): GlossaryItem {
        return this.items.filter((item) => item.id === id)[0];
    }

    getIcon(id: number): string {
        let iconCharCode: number = this.getItem(id).iconCharCode;
        return String.fromCharCode(iconCharCode ? iconCharCode : this.defaultIconCharCode);
    }
}
