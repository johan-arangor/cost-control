import { Fragment } from "react";
import { Button } from "react-bootstrap";
import DataTableComponent from '../../components/dataTable/index';

export function DataTableEntityes({ data, edit, remove }){
    const columns = [
        {
            name: 'Banco',
            selector: row => row.name,
            sortable: true
        },
        {
            button: true,
            cell: (row) => {
                return (
                    <Button 
                        type="button"
                        className="btn btn-warning"
                        onClick={() => edit(row)}>
                        Editar
                    </Button>
                )
            }
        },
        {
            button: true,
            cell: (row) =>
                <Button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => remove(row)}>
                    Eliminar
                </Button>
        }
    ];

    return(
        <Fragment>
            <DataTableComponent
                columns={columns}
                data={data}
            />
        </Fragment>
    );
}