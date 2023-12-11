




class Agendamento {
    constructor(data) {
        this.data = new Date(data);
    }

    getDataFormatada() {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        };

        const formatoData = new Intl.DateTimeFormat('pt-BR', options);
        return formatoData.format(this.data);
    }
}

class DataDimensao{

}

const agendamento = new Agendamento('2023-12-06');

const dataformadata = agendamento.getDataFormatada();
console.log(dataformadata);